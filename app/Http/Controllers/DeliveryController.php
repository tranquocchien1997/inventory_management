<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
                'status' => $this->baseModel->getReferenceByType(Helper::REFERENCE_STATUS),
                'statusPayment' => $this->baseModel->getReferenceByType(Helper::REFERENCE_PAYMENT_STATUS),
                'unitAmount' => $this->baseModel->getReferenceByType(Helper::REFERENCE_UNIT_AMOUNT),
            ];
        }else{
            return [
                'bank' => [],
                'notification' => [],
                'deliveryType' => [],
                'contract' => [],
                'status' => [],
                'statusPayment' => [],
                'unitAmount' => [],
            ];
        }
    }

    public function lists(Request $request){
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = [
            'delivery.*',
            'notification.code as notification_code',
            'bank.display_value as bank',
            'payment.display_value as status_payment',
            'delivery_type.display_value as delivery_type'
        ];
        $condition['join'] = [
            [Helper::TABLE_NOTIFICATION, 'notification.id', 'delivery.notification_id'],
            [Helper::TABLE_REFERENCE . ' as bank', 'bank.id', 'delivery.bank_id'],
            [Helper::TABLE_REFERENCE . ' as payment', 'payment.id', 'delivery.status_payment'],
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

        $delivery_id = $this->baseModel->createRecord($this->tableName, $param);

        if ($request->status == Helper::SUCCESS_STATUS_ID && $request->contract_id){
            $contract = DB::table(Helper::TABLE_CONTRACT)->find($request->contract_id);
            DB::table(Helper::TABLE_CONTRACT)->where('id', $request->contract_id)->update([
                'delivered_quantity' => $contract->delivered_quantity + $request->quantity_delivered
            ]);
        }
//        $this->baseModel->createRecord(Helper::TABLE_DELIVERY_CONTRACT, ['contract_id' => $contract_id, 'delivery_id' => $delivery_id]);

        return BaseController::apiResponse($delivery_id);

    }

    public function update(Request $request){

        $param = $request->all();

        $data = $this->baseModel->getById($this->tableName,$request->id);

        if ($request->status == Helper::SUCCESS_STATUS_ID && $request->contract_id && $data->status != $request->status){
            $contract = DB::table(Helper::TABLE_CONTRACT)->find($request->contract_id);
//            dd($contract);
            $this->baseModel->updateById(Helper::TABLE_CONTRACT, $request->contract_id, [
                'delivered_quantity' => $contract->delivered_quantity + $request->quantity_delivered
            ]);
        }

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
