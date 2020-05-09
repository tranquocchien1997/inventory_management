<?php

namespace App\Http\Controllers;

use App\Helper;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InventoryController extends BaseController
{
    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [
                'users' => $this->baseModel->getAllRecord(Helper::TABLE_USERS),
                'inventoryType' => $this->baseModel->getReferenceByType(Helper::REFERENCE_INVENTORY_TYPE)
            ];
        }else{
            return [
                'users' => [],
                'inventoryType' => []
            ];
        }

    }

    public function lists(Request $request){
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = ['inventory.*', 'users.name as user_name', 'reference.display_value as inventory_type'];
        $condition['join'] = [
            [Helper::TABLE_USERS, 'users.id', 'inventory.user_id'],
            [Helper::TABLE_REFERENCE, 'reference.id', 'inventory.type']

        ];
        $condition['condition'] = [
            'inventory.invalid' => Helper::RECORD_INVALID,
        ];

        return BaseController::apiResponse([
            'list'=> $this->baseModel->getAllRecord($this->tableName, $condition)
        ]);
    }
}
