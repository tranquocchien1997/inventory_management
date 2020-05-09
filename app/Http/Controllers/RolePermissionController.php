<?php

namespace App\Http\Controllers;

use App\BaseModel;
use App\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RolePermissionController extends BaseController
{
    public function __construct(BaseModel $baseModel, Request $request)
    {
        parent::__construct($baseModel, $request);

        $this->tableName = 'role';
    }

    public function lists(Request $request)
    {
        return BaseController::apiResponse([
            'list' => $this->baseModel->getAllRecord('role')
        ]);
    }
    public function create(Request $request)
    {
        DB::beginTransaction();

        try {
            $role = $this->baseModel->createRecord(Helper::TABLE_ROLE, ['name' => $request->name]);
            $params = $request->params;

            foreach ($params as $param){
                $permission = DB::table(Helper::TABLE_PERMISSION)->where($param)->first();

                $this->baseModel->createRecord(Helper::TABLE_ROLE_PERMISSION, ['role_id' => $role, 'permission_id' => $permission->id]);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            return BaseController::apiResponse('', $e->getMessage(), BaseController::API_UNEXPECTED_ERROR_RESPONSE_CODE);

        }


        return BaseController::apiResponse(true);

    }

    public function update(Request $request)
    {

        DB::beginTransaction();

        try {

            $this->baseModel->updateById(Helper::TABLE_ROLE,$request->id, ['name' => $request->name]);

            DB::table(Helper::TABLE_ROLE_PERMISSION)->where('role_id', $request->id)->delete();

            $params = $request->params;

            foreach ($params as $param){
                $permission = DB::table(Helper::TABLE_PERMISSION)->where($param)->first();

                $this->baseModel->createRecord(Helper::TABLE_ROLE_PERMISSION, ['role_id' => $request->id, 'permission_id' => $permission->id]);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            return BaseController::apiResponse('', $e->getMessage(), BaseController::API_UNEXPECTED_ERROR_RESPONSE_CODE);

        }


        return BaseController::apiResponse(true);

    }

    public function get(Request $request)
    {
        $query = DB::table(Helper::TABLE_ROLE)
            ->join(Helper::TABLE_ROLE_PERMISSION, 'role_id', '=','role.id')
            ->join(Helper::TABLE_PERMISSION, 'permission.id','=', 'permission_id')
            ->get();
        return BaseController::apiResponse($query);
    }

}
