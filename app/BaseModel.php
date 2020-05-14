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

    public function processActionQuantity($column = 'quantity', $inventory, $action, $invetoryRecei = []){
        $actionType = $this->getReferenceById($action->action_type_id)->value;
        $newQuantity = null;
        $newQuantityRecei = null;

        $quantity = $column == 'quantity' ? $inventory->quantity : $inventory->current_quantity;

        if($actionType == 'luan-chuyen'){

            if(empty($invetoryRecei)){
                return Helper::returnFunction(false, 0, 'Kho hàng nhận không tồn tại');
            }

            $quantityRecei = $column == 'quantity' ? $invetoryRecei->quantity : $invetoryRecei->current_quantity;

            $newQuantity = Helper::calculateActionQuantity('xuat', $quantity, $action->quantity);
            $newQuantityRecei = Helper::calculateActionQuantity('nhap', $quantityRecei, $action->quantity);
        }else{
            $newQuantity = Helper::calculateActionQuantity($actionType, $quantity, $action->quantity);
        }

        if($newQuantity < 0) {
            return Helper::returnFunction(false, 1, 'Số lượng tồn kho không đủ để đáp ứng');
        }

        $this->updateQuantityInventory($inventory->id, $newQuantity,$column);

        if($newQuantityRecei){
            $this->updateQuantityInventory($invetoryRecei->id, $newQuantityRecei,$column);
        }

        $type = $this->getReferenceById($invetoryRecei->type)->value;

//        if($actionType == 'luan-chuyen' && $type == 'kho-thue'){
//            $detail = $invetoryRecei->detail;
//
//            if (empty($detail) || !isset($detail[$inventory->id])){
//                $detail[$inventory->id] = $quantity;
//            }else{
//                $detail[$inventory->id] = $detail[$inventory->id] + $quantity;
//            }
//
//            $this->updateById(Helper::TABLE_INVENTORY, $invetoryRecei->id, ['detail' => $detail]);
//        }

        return Helper::returnFunction();

    }

    public function updateQuantityInventory($inventoryId, $newQuantity, $column = 'quantity'){
        return $this->updateById(Helper::TABLE_INVENTORY,$inventoryId, [$column => $newQuantity]);
    }

    public function handleStatusAction($action_id, $type, $newStatus)
    {

        $inventoryRecei = [];

        $action = $this->getById(Helper::TABLE_ACTION, $action_id);

        $currentStatus = $this->getReferenceById($action->status)->value;

        $actionType = $this->getReferenceById($action->action_type_id)->value;
        $inventory = $this->getById(Helper::TABLE_INVENTORY, $action->inventory_id);

        if ($type == 'delete'){

            return $this->actionRemove($currentStatus,$inventory,$action);

        } elseif ($type == 'restore'){
            return $this->actionCreate($currentStatus,$inventory,$action,$inventoryRecei);
        }

        $newStatus = $this->getReferenceById($newStatus)->value;


        if ($action->inventory_receive_id){
            $inventoryRecei = $this->getById(Helper::TABLE_INVENTORY, $action->inventory_receive_id);
        }

        if($type == 'create'){

            return $this->actionCreate($newStatus,$inventory,$action,$inventoryRecei);

        } elseif ($type == 'update' && $currentStatus != $newStatus){

            if($currentStatus == 'vua-tao' || $currentStatus == 'huy'){

                return $this->actionCreate($newStatus,$inventory,$action,$inventoryRecei);

            } elseif ($currentStatus == 'dang-thuc-hien'){

                if ($newStatus == 'vua-tao' || $newStatus == 'huy'){

                    return $this->actionRemove($currentStatus,$inventory,$action);

                }else{

                    return $this->actionCreate($newStatus,$inventory,$action,$inventoryRecei);

                }

            } elseif ($currentStatus == 'hoan-tat'){

                return $this->actionRemove($currentStatus,$inventory,$action);

            }
        }
    }

    public function actionCreate($newStatus,$inventory,$action,$inventoryRecei)
    {
        $currentStatus = $this->getReferenceById($action->status)->value;
        $process = Helper::returnFunction();

        if($newStatus == 'dang-thuc-hien' || ($newStatus == 'hoan-tat' && $currentStatus == 'vua-tao')){
            $process = $this->processActionQuantity('quantity', $inventory, $action, $inventoryRecei);
            if(!$process['status']){
                return $process;
            }
        }

        if ($newStatus == 'hoan-tat'){
            $process = $this->processActionQuantity('current_quantity', $inventory, $action, $inventoryRecei);

        }
        return $process;
    }

    public function actionRemove($currentStatus,$inventory,$action){

        $newQuantity = null;

        if($currentStatus == 'dang-thuc-hien'){
            $newQuantity = Helper::calculateActionQuantity('huy', $inventory->quantity, $action->quantity);

        }elseif($currentStatus == 'hoan-tat'){
            $newQuantity = Helper::calculateActionQuantity('huy', $inventory->current_quantity, $action->quantity);
        }

        if ($newQuantity === null){
            return Helper::returnFunction();
        }

        if($newQuantity < 0) {
            return Helper::returnFunction(false, 1, 'Số lượng tồn kho không đủ để đáp ứng');
        }

        $this->updateQuantityInventory($inventory->id, $newQuantity, $currentStatus == 'dang-thuc-hien' ? "quantity" : "current_quantity");

        return Helper::returnFunction();
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
                ' . $skipId . '
                AND (
                `status` = ' . $pending . '
                OR `status` = ' . $success . ')
                AND invalid = 0
        ');

        foreach ($actions as $action){
            $available = Helper::calculateActionQuantity($type[$action->action_type_id], $available, $action->quantity);

            if ($action->status == $success){
                $current = Helper::calculateActionQuantity($type[$action->action_type_id], $current, $action->quantity);
            }
        }

        return [
            'available' => $available,
            'current' => $current
        ];

    }

}
