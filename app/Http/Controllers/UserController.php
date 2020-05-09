<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends BaseController
{
    public function create(Request $request)
    {
        $condition = Helper::CONDITION_DEFAULT;

        $condition['condition']['email'] = $request->email;
        $condition['get'] = false;

        $checkExist = $this->baseModel->getAllRecord(Helper::TABLE_USERS, $condition);

        if ($checkExist->exists()){
            return BaseController::apiResponse(false);
        }

        $param = $request->all();
        $param['password'] = Hash::make($param['password']);

        return BaseController::apiResponse($this->baseModel->createRecord($this->tableName, $param));
    }

    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [
                'role' => $this->baseModel->getAllRecord(Helper::TABLE_ROLE),

            ];
        }else{
            return [
                'role' => [],
            ];
        }
    }

    public function lists(Request $request)
    {
        return BaseController::apiResponse([
            'list' => DB::table(Helper::TABLE_USERS)->leftJoin(Helper::TABLE_ROLE, 'role.id', '=', 'role_id')->select(['users.*', 'role.name as role_id'])->where('users.invalid', Helper::RECORD_INVALID)->get()
        ]);
    }
}
