<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;
use DB;

class ActionController extends BaseController
{
    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [
                'actionType' => $this->baseModel->getReferenceByType(Helper::REFERENCE_ACTION_TYPE),
                'user' => $this->baseModel->getAllRecord(Helper::TABLE_USERS),
                'inventory' => $this->baseModel->getAllRecord(Helper::TABLE_INVENTORY),
                'contract' => $this->baseModel->getAllRecord(Helper::TABLE_CONTRACT),
                'notification' => $this->baseModel->getAllRecord(Helper::TABLE_NOTIFICATION),
                'status' => $this->baseModel->getReferenceByType(Helper::REFERENCE_STATUS),

            ];
        }else{
            return [
                'actionType' => [],
                'user' => [],
                'contract' => [],
                'inventory' => [],
                'notification' => [],
                'status' => [],
            ];
        }
    }

    public function lists(Request $request){
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = [
            'action.*',
            'users.name as user_name',
            'ref_action.display_value as action_type',
            'ref_status.display_value as status_name',
            'contract.code as contract_code',
            'inven.name as iven_name',
            'inven_recei.name as inven_recei_name',
            'notification.code as notification_code'
        ];

        $condition['join'] = [
            [Helper::TABLE_USERS, 'users.id', 'creator_id'],
            [Helper::TABLE_NOTIFICATION, 'notification.id', 'action.notification_id'],
            [Helper::TABLE_REFERENCE . ' as ref_action', 'ref_action.id', 'action.action_type_id'],
            [Helper::TABLE_REFERENCE . " as ref_status", 'ref_status.id', 'action.status'],
            [Helper::TABLE_CONTRACT, 'contract.id', 'contract_id'],
            [Helper::TABLE_INVENTORY . " as inven", 'inven.id', 'inventory_id'],
            [Helper::TABLE_INVENTORY . ' as inven_recei', 'inven_recei.id', 'inventory_receive_id']
        ];

        $condition['condition'] = [
            'action.invalid' => Helper::RECORD_INVALID,
        ];

        $data = [];

        foreach ($this->baseModel->getAllRecord($this->tableName, $condition) as $item){
            if($item->inven_recei_name){
                $item->iven_name = $item->iven_name. ' => ' . $item->inven_recei_name;
            }

            $data[] = $item;
        }

        return BaseController::apiResponse([
            'list'=>$data
        ]);
    }

    public function create(Request $request){

        DB::beginTransaction();

        $allType = $this->baseModel->getReferenceByType(Helper::REFERENCE_ACTION_TYPE);
        $type = [];
        foreach ($allType as $item){
            $type[$item->id] = $item->value;
        }
        $quantity = $this->baseModel->getQuantityInventoryById($request->inventory_id);

        $newQuantity = Helper::calculateActionQuantity($type[$request->action_type_id], $quantity['available'], $request->quantity);
        info($quantity);

        if ($newQuantity < 0){
            return BaseController::apiResponse(Helper::returnFunction(false, 1, 'Số lượng tồn kho không đủ để đáp ứng'), '', self::API_UNEXPECTED_ERROR_RESPONSE_CODE);
        }

        $check = null;

        if($request->status == Helper::SUCCESS_STATUS_ID ){
            if ($type[$request->action_type_id] == 'luan-chuyen'){
                $check = $this->baseModel->handleChangeQuantityEnrolInventory($type[$request->action_type_id], $request->inventory_id, $request->quantity, $request->inventory_receive_id);
            } elseif ($type[$request->action_type_id] == 'xuat'){
                $check = $this->baseModel->handleChangeQuantityEnrolInventory($type[$request->action_type_id], $request->inventory_product_id, $request->quantity, $request->inventory_id);
            }
        }

        if ($check && !$check['status']){
            return BaseController::apiResponse($check, self::API_UNEXPECTED_ERROR_RESPONSE_CODE);
        }

        $params = $request->all();

        $createAction = $this->baseModel->createRecord($this->tableName, $params);

        $quantity = $this->baseModel->getQuantityInventoryById($request->inventory_id);

        $this->baseModel->updateById(Helper::TABLE_INVENTORY, $request->inventory_id, [
            'quantity' => $quantity['available'],
            'current_quantity' => $quantity['current']
        ]);

        DB::commit();
        return BaseController::apiResponse($createAction);

    }


    public function update(Request $request)
    {

        $allType = $this->baseModel->getReferenceByType(Helper::REFERENCE_ACTION_TYPE);
        $type = [];
        foreach ($allType as $item){
            $type[$item->id] = $item->value;
        }

        $quantity = $this->baseModel->getQuantityInventoryById($request->inventory_id, $request->id);

        $newQuantity = Helper::calculateActionQuantity($type[$request->action_type_id], $quantity['available'], $request->quantity);

        if ($newQuantity < 0){
            return BaseController::apiResponse(Helper::returnFunction(false, 1, 'Số lượng tồn kho không đủ để đáp ứng'), '', self::API_UNEXPECTED_ERROR_RESPONSE_CODE);
        }

        $check = null;

        if ($type[$request->action_type_id] == 'luan-chuyen'){
            $check = $this->baseModel->handleChangeQuantityEnrolInventory($type[$request->action_type_id], $request->inventory_id, $request->quantity, $request->inventory_receive_id);
        } elseif ($type[$request->action_type_id] == 'xuat'){
            $check = $this->baseModel->handleChangeQuantityEnrolInventory($type[$request->action_type_id], $request->inventory_product_id, $request->quantity, $request->inventory_id);
        }

        if ($check && !$check['status']){
            return BaseController::apiResponse($check, self::API_UNEXPECTED_ERROR_RESPONSE_CODE);
        }

        $params = $request->all();

//        unset($params['inventory_product_id']);

        $update = $this->baseModel->updateById($this->tableName, $request->id, $params);

        $quantity = $this->baseModel->getQuantityInventoryById($request->inventory_id);

        $this->baseModel->updateById(Helper::TABLE_INVENTORY, $request->inventory_id, [
            'quantity' => $quantity['available'],
            'current_quantity' => $quantity['current']
        ]);

        return BaseController::apiResponse($update);
    }


}
