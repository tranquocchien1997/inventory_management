<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;

class TransportController extends BaseController
{
    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [
                'transportType' => $this->baseModel->getReferenceByType(Helper::REFERENCE_TRANSPORT_TYPE),
                'driver' => $this->baseModel->getAllRecord(Helper::TABLE_DRIVER),
                'vehicle' => $this->baseModel->getAllRecord(Helper::TABLE_VEHICLE),
                'transportVendor' => $this->baseModel->getAllRecord(Helper::TABLE_TRANSPORT_VENDOR),
            ];
        }else{
            return [
                'transportType' => [],
                'driver' => [],
                'vehicle' => [],
                'transportVendor' => [],
            ];
        }
    }

    public function lists(Request $request){
        $condition = Helper::CONDITION_DEFAULT;
        $condition['select'] = [
            'transport.*',
            'vehicle.code as vehicle_code',
            'driver.name as driver_name',
            'transport_vendor.name as transport_vendor_name',
            'reference.display_value as transport_type'
        ];
        $condition['join'] = [
            [Helper::TABLE_REFERENCE, 'reference.id', 'transport.transport_type_id'],
            [Helper::TABLE_VEHICLE, 'vehicle.id', 'transport.vehicle_id'],
            [Helper::TABLE_DRIVER, 'driver.id', 'transport.driver_id'],
            [Helper::TABLE_TRANSPORT_VENDOR, 'transport_vendor.id', 'transport.transport_vendor_id']
        ];

        $condition['condition'] = [
            'transport.invalid' => Helper::RECORD_INVALID,
        ];

        return BaseController::apiResponse([
            'list'=> $this->baseModel->getAllRecord($this->tableName, $condition)
        ]);
    }
}
