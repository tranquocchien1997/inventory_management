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
            ];
        }else{
            return [
                'action' => [],
                'transport' => [],
                'delivery' => [],
            ];
        }
    }
}
