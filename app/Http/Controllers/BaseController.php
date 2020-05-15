<?php

namespace App\Http\Controllers;

use App\BaseModel;
use App\Helper;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Identify;

class BaseController extends Controller
{
    const API_SUCCESS_RESPONSE_CODE = 0;
    const API_VALIDATE_ERROR_RESPONSE_CODE = 1;
    const API_PERMISSIONS_DENIED_RESPONSE_CODE = 50;
    const API_UNEXPECTED_ERROR_RESPONSE_CODE = 999;

    const SUCCESS = 200;
    const CREATED = 201;
    const ACCEPTED = 202;
    const BAD_REQUEST = 400;
    const UNAUTHORIZED = 401;
    const METHOD_FORBIDDEN = 403;


    function __construct(BaseModel $baseModel, Request $request)
    {
        $this->baseModel = $baseModel;
        $this->reference = [];
        $this->tableName = Helper::getModuleByRouteName($request->route()->getName());
        $this->validate = [];
    }

    public static function apiResponse($data, $message = null, $statusCode = self::API_SUCCESS_RESPONSE_CODE, $httpCode = self::SUCCESS)
    {

        $response = [
            "data" => $data,
            "status" => $statusCode
        ];

        if (!empty($message)) {
            $response["message"] = $message;
        }
        return response()->json($response, $httpCode);
    }

    public function pageMain(Request $request)
    {
        $cookie = $request->cookie('keymain');
////        dd($request->cookie());
//         if($cookie !== 'JmBmJbeIoSW3fwO7Rw3j9wHBoeftU3jsYujnvpyG'){
//             return view('welcome');
////             abort(404);
//         }

        if (!Auth::check()) {
            return redirect(route('login'));
        }
        $reference = json_encode($this->setReference($request));
        $permission = json_encode(Helper::getPermissionByUser());

        return view('layouts.app', compact('reference','permission'));
    }

    public function setReference($request)
    {
        return [];
    }

    public function lists(Request $request)
    {
        return BaseController::apiResponse([
            'list' => $this->baseModel->getAllRecord($this->tableName)
        ]);
    }

    public function trash(Request $request)
    {
        return BaseController::apiResponse([
            'list' => $this->baseModel->getAllRecordTrash($this->tableName)
        ]);
    }

    public function create(Request $request)
    {
        return BaseController::apiResponse($this->baseModel->createRecord($this->tableName, $request->all()));

    }

    public function get(Request $request)
    {
        return BaseController::apiResponse($this->baseModel->getById($this->tableName, $request->id));
    }

    public function update(Request $request)
    {
        return BaseController::apiResponse($this->baseModel->updateById($this->tableName, $request->id, $request->all()));
    }

    public function softDelete(Request $request)
    {
        return BaseController::apiResponse($this->baseModel->softDeleteById($this->tableName, $request->id));
    }

    public function delete(Request $request)
    {
        return BaseController::apiResponse($this->baseModel->deleteById($this->tableName, $request->id));
    }

    public function restore(Request $request)
    {
        return BaseController::apiResponse($this->baseModel->restoreById($this->tableName, $request->id));
    }


    public function reference(Request $request)
    {
        return BaseController::apiResponse($this->setReference($request));
    }


}
