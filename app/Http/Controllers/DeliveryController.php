<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;

class DeliveryController extends BaseController
{
    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [

                'bank' => $this->baseModel->getReferenceByType(Helper::REFERENCE_BANK),
                'notification' => $this->baseModel->getAllRecord(Helper::TABLE_NOTIFICATION),
                'deliveryType' => $this->baseModel->getReferenceByType(Helper::REFERENCE_DELIVERY_TYPE),
                'contract' => $this->baseModel->getAllRecord(Helper::TABLE_CONTRACT),
            ];
        }else{
            return [
                'bank' => [],
                'notification' => [],
                'deliveryType' => [],
                'contract' => [],
            ];
        }
    }

    public function lists(Request $request){
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = [
            'delivery.*',
            'notification.code as notification_code',
            'bank.display_value as bank',
            'delivery_type.display_value as delivery_type'
        ];
        $condition['join'] = [
            [Helper::TABLE_NOTIFICATION, 'notification.id', 'delivery.notification_id'],
            [Helper::TABLE_REFERENCE . ' as bank', 'bank.id', 'delivery.bank_id'],
            [Helper::TABLE_REFERENCE . ' as delivery_type', 'delivery_type.id', 'delivery.delivery_type_id']
        ];

        $condition['condition'] = [
            'delivery.invalid' => Helper::RECORD_INVALID,
        ];

        return BaseController::apiResponse([
            'list'=> $this->baseModel->getAllRecord($this->tableName, $condition)
        ]);
    }

    public function create(Request $request){
        $contract_id = $request->contract_id;
        $param = $request->all();

        unset($param['contract_id']);

        $delivery_id = $this->baseModel->createRecord($this->tableName, $param);

        $this->baseModel->createRecord(Helper::TABLE_DELIVERY_CONTRACT, ['contract_id' => $contract_id, 'delivery_id' => $delivery_id]);

        return BaseController::apiResponse(true);

    }

    public function update(Request $request){

        $param = $request->all();
        unset($param['contract_id']);

        return BaseController::apiResponse($this->baseModel->updateById($this->tableName,$request->id, $param));

    }

    public function getTransportByDelivery(Request $request){
        $condition = Helper::CONDITION_DEFAULT;

        $condition['condition'] = [
            'delivery_id' => $request->id
        ];

        $condition['select'] = [
            'id'
        ];

        return BaseController::apiResponse($this->baseModel->getAllRecord(Helper::TABLE_DELIVERY_TRANSPORT, $condition));
    }
}
