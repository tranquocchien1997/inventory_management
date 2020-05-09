<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;
use mysql_xdevapi\Table;

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
            ];
        }else{
            return [
                'customer' => [],
                'user' => [],
                'contractType' => [],
                'paymentMethod' => [],
                'actionType' => [],

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
        ];
        $condition['join'] = [
            [Helper::TABLE_USERS, 'users.id', 'contract.creator_id'],
            [Helper::TABLE_CUSTOMER, 'customer.id', 'contract.customer_id'],
            [Helper::TABLE_REFERENCE . ' as payment', 'payment.id', 'contract.payment_method'],
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
        $condition['join'] = [
            [Helper::TABLE_DELIVERY_CONTRACT, 'delivery_contract.delivery_id', 'delivery.id'],
        ];
        $condition['condition'] = [
            'delivery.invalid' => Helper::RECORD_INVALID,
            'delivery_contract.contract_id' => $request->id
        ];
        $condition['sort'] = ['delivery.id' => 'DESC'];

        $condition['select'] = [
            'delivery.id'
        ];

        return BaseController::apiResponse($this->baseModel->getAllRecord(Helper::TABLE_DELIVERY, $condition));
    }
}
