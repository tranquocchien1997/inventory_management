<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ContractController extends BaseController
{
    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [
                'customer' => $this->baseModel->getAllRecord(Helper::TABLE_CUSTOMER),
                'user' => $this->baseModel->getAllRecord(Helper::TABLE_USERS),
                'contractType' => $this->baseModel->getReferenceByType(Helper::REFERENCE_CONTRACT_TYPE),
                'paymentMethod' => $this->baseModel->getReferenceByType(Helper::REFERENCE_PAYMENT_METHOD),
                'actionType' => $this->baseModel->getReferenceByType(Helper::REFERENCE_ACTION_TYPE),
                'direction' => $this->baseModel->getReferenceByType(Helper::REFERENCE_DIRECTION),
                'unitAmount' => $this->baseModel->getReferenceByType(Helper::REFERENCE_UNIT_AMOUNT),
                'bank' => $this->baseModel->getReferenceByType(Helper::REFERENCE_BANK),
            ];
        }else{
            return [
                'customer' => [],
                'user' => [],
                'contractType' => [],
                'paymentMethod' => [],
                'actionType' => [],
                'direction' => [],
                'unitAmount' => [],
                'bank' => [],
            ];
        }
    }

    public function lists(Request $request){
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = [
            'contract.*',
            'customer.company_name as company_name',
            'users.name as creator',
            'payment.display_value as payment',
            'direction.display_value as direction'
        ];
        $condition['join'] = [
            [Helper::TABLE_USERS, 'users.id', 'contract.creator_id'],
            [Helper::TABLE_CUSTOMER, 'customer.id', 'contract.customer_id'],
            [Helper::TABLE_REFERENCE . ' as payment', 'payment.id', 'contract.payment_method'],
            [Helper::TABLE_REFERENCE . ' as direction', 'direction.id', 'contract.direction_id'],

        ];
        $condition['condition'] = [
            'contract.invalid' => Helper::RECORD_INVALID,
        ];
        return BaseController::apiResponse([
            'list'=> $this->baseModel->getAllRecord($this->tableName, $condition)
        ]);
    }

    public function getActionByContract(Request $request){

        $condition = Helper::CONDITION_DEFAULT;

        $condition['condition'] = [
            'contract_id' => $request->id,
        ];

        return BaseController::apiResponse($this->baseModel->getAllRecord(Helper::TABLE_ACTION, $condition));
    }

    public function getDeliveryByContract(Request $request){

        $condition = Helper::CONDITION_DEFAULT;

        $condition['condition'] = [
            'delivery.invalid' => Helper::RECORD_INVALID,
            'delivery.contract_id' => $request->id
        ];
        $condition['sort'] = ['delivery.id' => 'DESC'];

        $condition['select'] = [
            'delivery.id'
        ];

        return BaseController::apiResponse($this->baseModel->getAllRecord(Helper::TABLE_DELIVERY, $condition));
    }

    public function create(Request $request)
    {

        $contractId = $this->baseModel->createRecord($this->tableName, $request->all());

        DB::table(Helper::TABLE_DELIVERY)
            ->where('contract_id', $contractId)
            ->update([
                'bank_id' => $request->bank_id
            ]);

        return BaseController::apiResponse($contractId);

    }

    public function update(Request $request)
    {

        DB::table(Helper::TABLE_DELIVERY)
            ->where('contract_id', $request->id)
            ->update([
                'bank_id' => $request->bank_id
            ]);

        return BaseController::apiResponse($this->baseModel->updateById($this->tableName, $request->id, $request->all()));
    }

}
