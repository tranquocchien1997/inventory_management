<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;

class DeliveryTransportController extends BaseController
{
    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [
                'action' => $this->baseModel->getAllRecord(Helper::TABLE_ACTION),
                'transport' => $this->baseModel->getAllRecord(Helper::TABLE_TRANSPORT),
                'delivery' => $this->baseModel->getAllRecord(Helper::TABLE_DELIVERY),
                'status' => $this->baseModel->getReferenceByType(Helper::REFERENCE_STATUS),

            ];
        }else{
            return [
                'action' => [],
                'transport' => [],
                'delivery' => [],
                'status' => [],

            ];
        }
    }

    public function lists(Request $request)
    {
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = [
            'delivery_transport.*',
            'action.code as action_code',
            'delivery.code as delivery_code',
            'transport.code as transport_code',
            'reference.display_value as status_name'
        ];
        $condition['join'] = [
            [Helper::TABLE_ACTION, 'action.id', 'delivery_transport.action_id'],
            [Helper::TABLE_DELIVERY, 'delivery.id', 'delivery_transport.delivery_id'],
            [Helper::TABLE_TRANSPORT, 'transport.id', 'delivery_transport.transport_id'],
            [Helper::TABLE_REFERENCE, 'reference.id', 'delivery_transport.status']
        ];

        $condition['condition'] = [
            'delivery.invalid' => Helper::RECORD_INVALID,
        ];

        return BaseController::apiResponse([
            'list'=> $this->baseModel->getAllRecord($this->tableName, $condition)
        ]);
    }
}
