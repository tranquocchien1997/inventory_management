<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;

class NotiController extends BaseController
{
    public function setReference($request)
    {
        if (Helper::getMethodByRouteName($request->route()->getName()) == 'reference') {
            return [
                'actionType' => $this->baseModel->getReferenceByType(Helper::REFERENCE_ACTION_TYPE)
            ];
        } else {
            return [
                'actionType' => []
            ];
        }

    }

    public function lists(Request $request)
    {
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = ['notification.*', 'reference.display_value as action_type'];
        $condition['join'] = [
            [Helper::TABLE_REFERENCE, 'reference.id', 'notification.action_type_id']
        ];

        $condition['condition'] = [
            'notification.invalid' => Helper::RECORD_INVALID,
        ];

        return BaseController::apiResponse([
            'list' => $this->baseModel->getAllRecord($this->tableName, $condition)
        ]);
    }

}
