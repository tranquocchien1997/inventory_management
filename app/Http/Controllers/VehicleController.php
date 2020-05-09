<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;

class VehicleController extends BaseController
{
    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [
                'transportVendor' => $this->baseModel->getAllRecord(Helper::TABLE_TRANSPORT_VENDOR),
                'transportType' => $this->baseModel->getReferenceByType(Helper::REFERENCE_TRANSPORT_TYPE)
            ];
        }else{
            return [
                'transportVendor' => [],
                'transportType' => []
            ];
        }

    }

    public function lists(Request $request){
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = ['vehicle.*', 'transport_vendor.name as transport_vendor', 'reference.display_value as transport_type'];
        $condition['join'] = [
            [Helper::TABLE_TRANSPORT_VENDOR, 'vehicle.transport_vendor_id', 'transport_vendor.id'],
            [Helper::TABLE_REFERENCE, 'reference.id', 'vehicle.transport_type_id']

        ];
        $condition['condition'] = [
            'vehicle.invalid' => Helper::RECORD_INVALID,
        ];

        return BaseController::apiResponse([
            'list'=> $this->baseModel->getAllRecord($this->tableName, $condition)
        ]);
    }
}
