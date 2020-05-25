<?php

namespace App;

use App\Helper;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BaseModel extends Model
{
    protected $model;
    protected $query;
    protected $condition;
    protected $join;
    protected $select;

    public function setTableName(){
        return DB::table($this->model);
    }

    public function getAllRecord($model, $condition = Helper::CONDITION_DEFAULT){
        $this->model = $model;
        $this->query = $this->setTableName();
        $this->condition = $condition;

        $this->queryCondition();
        $this->joinTable();
        $this->selectColumn();
        $this->sortData();

        return $this->getData();
    }

    public function getAllRecordTrash($model)
    {
        $this->model = $model;
        $this->query = $this->setTableName();
        return $this->query->where('invalid', Helper::RECORD_NOT_INVALID)->get();
    }

    public function createRecord($model, $newData){
        if(isset($newData['_token'])){
            unset($newData['_token']);
        }

        $this->model = $model;
        $this->query = $this->setTableName();
        return $this->query->insertGetId($newData);
    }

    public function updateRecord($model, $newData, $condition = Helper::CONDITION_DEFAULT){
        $this->model = $model;
        $this->query = $this->setTableName();
        $this->queryCondition();
        $this->update($newData);
    }

    public function updateById($model, $id, $newData,$condition = []){
        if (isset($newData['_token'])) {
            unset($newData['_token']);
        }
        if (isset($newData['id'])) {
            unset($newData['id']);
        }

        $this->model = $model;
        $this->query = $this->setTableName();
        $this->query->where('id', $id);

        $newData['updated_at'] = Carbon::now();
        $this->query->update($newData);

        return $this->getById($model, $id);
    }

    public function getById($model, $id, $condition = []){
        $this->model = $model;
        $this->query = $this->setTableName();

        return $this->query->find($id);
    }

    public function softDeleteById($model, $id,$condition = []){
        $this->model = $model;
        $this->query = $this->setTableName();

        return $this->query->where('id', $id)->update([
            'invalid' => Helper::RECORD_NOT_INVALID
        ]);
    }

    public function deleteById($model, $id, $condition = []){
        $this->model = $model;
        $this->query = $this->setTableName();

        return $this->query->where('id', $id)->delete();
    }

    public function restoreById($model, $id, $condition = []){
        $this->model = $model;
        $this->query = $this->setTableName();

        return $this->query->where('id', $id)->update([
            'invalid' => Helper::RECORD_INVALID
        ]);
    }

    public function clearTrash($model, $condition = Helper::CONDITION_DEFAULT){}

    public function clearTrashById($model, $id, $condition = []){}


    public function queryCondition(){
        if(!empty($this->condition['condition'])){
            $this->query->where($this->condition['condition']);
        }
    }

    public function joinTable(){
        foreach ($this->condition['join'] as $condition){
            $this->query->leftJoin($condition[0], $condition[1], '=', $condition[2]);
        }
    }

    public function selectColumn(){
        if (!empty($this->condition['select'])){
            $this->query->select($this->condition['select']);
        }
    }

    public function getData(){
        if($this->condition['get']){
            return $this->query->get();
        }

        return $this->query;
    }

    public function sortData(){
        $condition = $this->condition['sort'];

        if(empty($condition)) return;

        foreach($condition as $key => $value){
            $this->query->orderBy($key, $value);
        }
    }

    public function getReferenceByType($type, $value = null){
        $condition = Helper::CONDITION_DEFAULT;
        $condition['condition']['type'] = $type;

        if($value){
            $condition['condition']['value'] = $value;
            $condition['get'] = false;
            return $this->getAllRecord(Helper::TABLE_REFERENCE,$condition)->first();
        }

        return $this->getAllRecord(Helper::TABLE_REFERENCE,$condition);

    }

    public function getReferenceById($id){
        return $this->getById(Helper::TABLE_REFERENCE,$id);
    }

    public function getQuantityInventoryById($id, $skipId = null)
    {
        $current = 0;
        $available = 0;

        $pending = $this->getReferenceByType(Helper::REFERENCE_STATUS, 'dang-thuc-hien')->id;
        $success = $this->getReferenceByType(Helper::REFERENCE_STATUS, 'hoan-tat')->id;

        $actionType = $this->getReferenceByType(Helper::REFERENCE_ACTION_TYPE);

        $type = [];
        foreach ($actionType as $item){
            $type[$item->id] = $item->value;
        }

        if ($skipId){
            $skipId = 'AND inventory_id != '. $skipId;
        }
        $actions = DB::select('
            SELECT
                *
            FROM
                `action`
            WHERE
                inventory_id = ' . $id . '
                OR inventory_receive_id = ' . $id . '
                ' . $skipId . '
                AND (
                `status` = ' . $pending . '
                OR `status` = ' . $success . ')
                AND invalid = 0
        ');

        foreach ($actions as $action){
            if ($action->inventory_id == $id){
                $available = Helper::calculateActionQuantity($type[$action->action_type_id], $available, $action->quantity);

                if ($action->status == $success){
                    $current = Helper::calculateActionQuantity($type[$action->action_type_id], $current, $action->quantity);
                }
            }else{
                $available = Helper::calculateActionQuantity('nhap', $available, $action->quantity);

                if ($action->status == $success){
                    $current = Helper::calculateActionQuantity('nhap', $current, $action->quantity);
                }
            }

        }

        return [
            'available' => $available,
            'current' => $current
        ];

    }


    public static function handleChangeQuantityEnrolInventory($type, $inventory_id, $quantity, $inventoryRecei_id){
        if ($type != 'luan-chuyen' && $type != 'xuat'){
            info(371);
            return Helper::returnFunction();
        }

        if (empty($inventoryRecei_id) || empty($inventory_id)){
            return Helper::returnFunction();
        }

        $inventoryRecei = DB::table(Helper::TABLE_INVENTORY)->find($inventoryRecei_id);
        $inventory = DB::table(Helper::TABLE_INVENTORY)->find($inventory_id);

        if ($type == 'xuat' && $inventory->type == Helper::ENROL_INVENTORY_TYPE_ID){
            info(382);
            return Helper::returnFunction();
        }

        if ($type == 'luan-chuyen' && $inventoryRecei->type != Helper::ENROL_INVENTORY_TYPE_ID){
            info(387);
            return Helper::returnFunction();
        }

        $detail = json_decode($inventoryRecei->detail, true);

        if($type == 'luan-chuyen'){
            if (empty($detail) || !isset($detail[$inventory_id]) || empty($detail[$inventory_id])){
                $detail[$inventory_id] = $quantity;
            }else{
                $detail[$inventory_id] = $detail[$inventory_id] + $quantity;
            }
        }else{
            if (empty($detail) || !isset($detail[$inventory_id]) || empty($detail[$inventory_id])){
                return Helper::returnFunction(false, 1, 'Nguồn hàng không hợp lệ');
            }else{
                $detail[$inventory_id] = $detail[$inventory_id] - $quantity;
            }
        }

        DB::table(\App\Helper::TABLE_INVENTORY)->where('id', $inventoryRecei_id)->update([
            'detail' => json_encode($detail)
        ]);

        return Helper::returnFunction();
    }

}
