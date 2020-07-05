<?php

namespace App\Http\Controllers;

use App\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContractBusinessController extends BaseController
{
    public function setReference($request)
    {
        if(Helper::getMethodByRouteName($request->route()->getName()) == 'reference'){
            return [
                'customer' => $this->baseModel->getAllRecord(Helper::TABLE_CUSTOMER),
                'inventory' => $this->baseModel->getAllRecord(Helper::TABLE_INVENTORY),
            ];
        }else{
            return [
                'customer' => [],
                'inventory' => [],
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
            'direction.display_value as direction'
        ];
        $condition['join'] = [
            [Helper::TABLE_USERS, 'users.id', 'contract.creator_id'],
            [Helper::TABLE_CUSTOMER, 'customer.id', 'contract.customer_id'],
            [Helper::TABLE_REFERENCE . ' as payment', 'payment.id', 'contract.payment_method'],
            [Helper::TABLE_REFERENCE . ' as direction', 'direction.id', 'contract.direction_id'],

        ];
        $condition['condition'] = [
            'contract.invalid' => Helper::RECORD_INVALID,
        ];
        return BaseController::apiResponse([
            'list'=> $this->baseModel->getAllRecord($this->tableName, $condition)
        ]);
    }

    public function update(Request $request)
    {
        if ($inventory = json_decode($request->inventory_selected, true)){
            DB::beginTransaction();
            foreach ($inventory as $item) {
                if (!isset($item['disabled']) || !$item['disabled']){
                    $calculate = DB::table(Helper::TABLE_INVENTORY)->find($item['id'])->quantity_business - $item['qty_export'];

                    if ($calculate < 0){
                        DB::rollBack();
                        return BaseController::apiResponse(null, 'Số tồn kho không đủ', self::API_UNEXPECTED_ERROR_RESPONSE_CODE);
                    }

                    DB::table(Helper::TABLE_INVENTORY)
                        ->where('id', $item['id'])
                        ->update([
                            'quantity_business' => $calculate
                        ]);
                }

            }
            DB::commit();
        }
        return BaseController::apiResponse($this->baseModel->updateById(Helper::TABLE_CONTRACT, $request->id, $request->all()));
    }

    public function create(Request $request)
    {
        if ($inventory = json_decode($request->inventory_selected, true)){
            DB::beginTransaction();

            foreach ($inventory as $item) {
                $calculate = DB::table(Helper::TABLE_INVENTORY)->find($item['id'])->quantity_business - $item['qty_export'];

                if ($calculate < 0){
                    DB::rollBack();
                    return BaseController::apiResponse(null, 'Số tồn kho không đủ', self::API_UNEXPECTED_ERROR_RESPONSE_CODE);
                }
                DB::table(Helper::TABLE_INVENTORY)
                    ->where('id', $item['id'])
                    ->update([
                        'quantity_business' => $calculate
                    ]);
            }
            DB::commit();

        }

        return BaseController::apiResponse($this->baseModel->createRecord(Helper::TABLE_CONTRACT, $request->all()));
    }

    public function rollback(Request $request)
    {
        $params = $request->id;
        $contractId = $params['id'];
        $inventoryId = $params['inventory'];

        $contract = DB::table(Helper::TABLE_CONTRACT)->find($contractId);

        $inventorySelected = json_decode($contract->inventory_selected, true);

        $inventory = current(array_filter($inventorySelected, function ($item) use ($inventoryId) {
            return $item['id'] == $inventoryId;
        }));

        DB::table(Helper::TABLE_INVENTORY)->where('id', $inventoryId)->update([
            'quantity_business' => DB::table(Helper::TABLE_INVENTORY)->find($inventoryId)->quantity_business + $inventory['qty_export']
        ]);

        $inventoryOther = array_filter($inventorySelected, function ($item) use ($inventoryId) {
            return $item['id'] != $inventoryId;
        });

        DB::table(Helper::TABLE_CONTRACT)->where('id', $contractId)->update([
            'inventory_selected' => json_encode(array_values($inventoryOther))
        ]);

        return BaseController::apiResponse([
            'inventory_selected' => $inventoryOther
        ]);
    }
}
