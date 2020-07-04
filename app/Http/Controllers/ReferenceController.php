<?php

namespace App\Http\Controllers;

use App\Helper;
use App\Reference;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ReferenceController extends BaseController
{
    public function setReference($request)
    {
        return [
            'referenceType' => [
//                Helper::REFERENCE_PRODUCT_TYPE,
//                Helper::REFERENCE_PRODUCT,
//                Helper::REFERENCE_PRODUCT_SIZE,
//                Helper::REFERENCE_INVENTORY_TYPE,
//                Helper::REFERENCE_INVENTORY_ACTION,
//                Helper::REFERENCE_CONTRACT_TYPE,
//                Helper::REFERENCE_STATUS,
//                Helper::REFERENCE_TRANSPORT_TYPE,
//                Helper::REFERENCE_DELIVERY_TYPE,
//                Helper::REFERENCE_REPORT_TYPE,
//                Helper::REFERENCE_PAYMENT_METHOD,
//                Helper::REFERENCE_ROLE_TYPE,
//                Helper::REFERENCE_MODULE,
                Helper::REFERENCE_BANK,
//                Helper::REFERENCE_ACTION_TYPE,
//                Helper::REFERENCE_TABLE_NAME,
//                Helper::REFERENCE_DIRECTION,
//                Helper::REFERENCE_PAYMENT_STATUS,
//                Helper::REFERENCE_UNIT_AMOUNT,
            ]
        ];
    }

    public function lists(Request $request)
    {
        return BaseController::apiResponse([
            'list' => DB::table(Helper::TABLE_REFERENCE)->where('type', $request->type)->get()
        ]);
    }

    public function update(Request $request)
    {
        foreach ($request->lists as $item){
            if (empty($item['display_value'])) continue;

            if ($item['id'] == 'undefined'){
                DB::table(Helper::TABLE_REFERENCE)->insert(
                    [
                        'display_value' => $item['display_value'],
                        'value' => Str::slug($item['display_value']),
                        'type' => $request->type
                    ]
                );
            } else {
                DB::table(Helper::TABLE_REFERENCE)->where([
                    'id' => $item['id']
                ])
                    ->update([
                        'display_value' => $item['display_value']
                    ]);
            }

        }
    }
}
