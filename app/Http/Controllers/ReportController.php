<?php

namespace App\Http\Controllers;

use App\Helper;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\DB;

class ReportController extends BaseController
{
    public function create(Request $request)
    {

        $fromDate = $request->from_date;

        $toDate = $request->to_date;

        if (!$toDate) {
            $toDate = Carbon::now()->format('YYYY-MM-DD');
        }


        if ($request->type == 1) {
            $paper = 'a3';
            $data = $this->queryContractReport($fromDate, $toDate);
            $blade = 'report.contract';
        } elseif($request->type == 2) {
            $paper = 'a4';
            $data = $this->queryInventoryReport($fromDate, $toDate);
            $blade = 'report.inventory';

        } else {
            $paper = 'a4';
            $data = $this->queryInventoryBasicReport($fromDate, $toDate);
            $blade = 'report.inventory_basic';

        }

//        $title = $data['title'];
//        $sub_title = $data['sub_title'];
//        $list = $data['list'];
//
//        $inventory = isset($data['inventory']) ? $data['inventory']: [];
//        $delivery = isset($data['delivery']) ? $data['delivery'] : [];
//        $total = isset($data['total']) ? $data['total'] : [];
////        dd($list);
//        return view($blade, compact('title', 'sub_title', 'list', 'inventory', 'delivery', 'total'));

        $pdf = PDF::loadView($blade, $data)->setPaper($paper, 'landscape');

//        return $pdf->download('itsolutionstuff.pdf');

        return $pdf->stream();

//        return BaseController::apiResponse(true);
    }

    public function queryContractReport($fromDate, $toDate){
        $query = DB::table(Helper::TABLE_CONTRACT);
        if ($fromDate){
            $query = $query->where('contract.created_at', '>=', Carbon::createFromFormat('d/m/Y',$fromDate)->format('Y-m-d') . " 00:00:00");
        }

        if ($toDate){
            $query = $query->where('contract.created_at', '<=', Carbon::createFromFormat('d/m/Y',$toDate)->format('Y-m-d') . " 23:59:00");

        }

        $query = $query->leftJoin('customer', 'customer.id', '=', 'customer_id')
            ->leftJoin('reference', 'reference.id', '=', 'payment_method')
//            ->leftJoin('delivery_contract', 'contract.id', '=', 'contract_id')
            ->leftjoin('delivery', 'delivery.contract_id', '=', 'contract.id')
            ->leftJoin('reference as bank', 'bank.id', '=', 'delivery.bank_id')
            ->select([
                'contract.code as code',
                'contract.date_created as date_created',
                'company_name as company_name',
                'contract.quantity as quantity',
                'contract.amount as amount',
                'contract.id as contract_id',
                'contract.total_amount as total_amount',
                'contract.expired_delivery as expired_delivery',
                'delivery.date_delivery as date_delivery',
                'delivery.quantity_delivery as quantity_delivery',
                'delivery.amount_delivery as amount_delivery',
                'delivery.date_delivered as date_delivered',
                'delivery.quantity_delivered as quantity_delivered',
                'delivery.estimate_date_amount_receive as estimate_date_amount_receive',
                'delivery.estimate_amount_receive as estimate_amount_receive',
                'delivery.date_amount_receive as date_amount_receive',
                'delivery.amount_receive as amount_receive',
                'delivery.id as delivery_id',
                'bank.display_value as bank_name',
                'reference.display_value as payment',
            ])
            ->orderBy('contract_id', 'ASC')
            ->get();

        $newData = [];
//            dd($query);

        foreach ($query as $item){
            if ($item->contract_id){
                $newData[$item->contract_id][$item->delivery_id] = $item;
            }
        }


        foreach ($newData as $k => $value){
            $newData[$k] = array_values($newData[$k]);
        }

        return [
            'title' => 'THEO DÕI THỰC HIỆN HỢP ĐỒNG  BÁN ĐƯỜNG BIỂN',
            'sub_title' => 'Năm ' . Carbon::now()->format('Y'),
            'list' => array_values($newData)
        ];
    }

    public function queryInventoryReport($fromDate, $toDate)
    {
        $query = DB::table(Helper::TABLE_CONTRACT);
        if ($fromDate){
            $query = $query->where('contract.created_at', '>=', Carbon::createFromFormat('d/m/Y',$fromDate)->format('Y-m-d') . " 00:00:00");
        }

        if ($toDate){
            $query = $query->where('contract.created_at', '<=', Carbon::createFromFormat('d/m/Y',$toDate)->format('Y-m-d') . " 23:59:00");

        }

//        $query = $query->where('contract.id', 30);


        $query = $query->leftJoin('action', 'action.contract_id', '=', 'contract.id')
            ->leftJoin('inventory', 'action.inventory_id', '=', 'inventory.id')
            ->leftJoin('reference', 'reference.id', '=', 'contract.direction_id')
            ->select([
                'contract.*',
                'action.quantity as action_quantity',
                'inventory.name as inventory_name',
                'inventory.id as inventory_id',
                'reference.display_value as direction_name'
            ])
            ->get();
//        dd($query);
        $inventory = DB::table(Helper::TABLE_INVENTORY)->where('invalid', 0)->get();

        $newInventory = [];

        foreach ($inventory as $value) {
            $newInventory[$value->id] = null;
        }

        $total_quantity = 0;
        $total_delivered_quantity = 0;
        $total_remain_quantity = 0;
        $total_inventory = $newInventory;

        $data = [];
//        dd($query);
        foreach ($query as $item){
            $total_quantity += $item->quantity;
            $total_delivered_quantity += $item->delivered_quantity;
            $total_remain_quantity += $item->quantity - $item->delivered_quantity;
            if ($item->inventory_id){
                $total_inventory[$item->inventory_id] += $item->action_quantity;
            }

            if (isset($data[$item->direction_name]['lists'][$item->id])){
//                dd($data);
                $data[$item->direction_name]['lists'][$item->id]->inventory[$item->inventory_id] = $data[$item->direction_name]['lists'][$item->id]->inventory[$item->inventory_id] + $item->action_quantity;
//                dd($data);

            }else{
                $localInven = $newInventory;
                if ($item->inventory_id){
                    $localInven[$item->inventory_id] = $item->action_quantity;
                }
                $item->inventory = $localInven;
                $data[$item->direction_name]['lists'][$item->id] = $item;
            }

            if (!isset($data[$item->direction_name]['summary'])){
                $data[$item->direction_name]['summary']['quantity'] = $data[$item->direction_name]['summary']['delivered_quantity'] = $data[$item->direction_name]['summary']['remain_quantity'] = 0;
                $data[$item->direction_name]['summary']['inventory'] = $newInventory;

            }
            $data[$item->direction_name]['summary']['quantity'] += $item->quantity;
            $data[$item->direction_name]['summary']['delivered_quantity'] += $item->delivered_quantity;
            $data[$item->direction_name]['summary']['remain_quantity'] += $item->quantity > $item->delivered_quantity ? $item->quantity - $item->delivered_quantity : 0;
            $data[$item->direction_name]['summary']['inventory'][$item->inventory_id] = $item->action_quantity;
        }
//        dd($data);

        $delivery = DB::table(Helper::TABLE_DELIVERY)
            ->join('delivery_transport', 'delivery_id', '=', 'delivery.id')
            ->join('transport', 'transport.id', '=', 'delivery_transport.transport_id')
            ->join('action', 'action.id', '=', 'delivery_transport.action_id')
            ->where('delivery.status', Helper::PENDING_STATUS_ID)
            ->select([
                'transport.code as code',
                'delivery_transport.amount as amount',
                'action.inventory_id as inventory_id',
            ]);

        if ($toDate){
            $query = $query->where('delivery.created_at', '<=', Carbon::createFromFormat('d/m/Y',$toDate)->format('Y-m-d') . " 23:59:00");
        }

        $delivery = $delivery->get();

//        dd($delivery);
        $newDeli = [];


        $sum = [
            'sum' => 0,
            'inventory' => $newInventory
        ];
        foreach ($delivery as $item_deli){
            if (isset($newDeli[$item_deli->code]['data'])){
                $newDeli[$item_deli->code]['data'][$item_deli->inventory_id] = $item_deli->amount;
            }else{
                $local = $newInventory;
                $local[$item_deli->inventory_id] = $item_deli->amount;
//            $item_deli->inventory = $local;
                $newDeli[$item_deli->code]['data'] = $local;
            }
            if (isset($sum['inventory'][$item_deli->inventory_id])){
                $sum['inventory'][$item_deli->inventory_id] += $item_deli->amount;
            }else{
                $sum['inventory'][$item_deli->inventory_id] = $item_deli->amount;
            }


            if (isset($newDeli[$item_deli->code]['sum'])){
                $newDeli[$item_deli->code]['sum'] += $item_deli->amount;
            }else{
                $newDeli[$item_deli->code]['sum'] = $item_deli->amount;
            }

            if (isset($sum['sum'])){

                $sum['sum'] += $item_deli->amount;
            }else{
                $sum['sum'] = $item_deli->amount;
            }

        }

//        dd($newDeli);
        $newDeliData = [
            'lists' => $newDeli,
            'sum' => $sum
        ];

        $total = [
            'quantity' => $total_quantity,
            'delivered' => $total_delivered_quantity,
            'remain' => $total_remain_quantity,
            'inventory' => $total_inventory
        ];

//        dd($total);
        return [
            'title' => 'CHI TIẾT PHẢI GIAO',
            'sub_title' => 'Tính đến hết ngày '. Carbon::now()->format('d/m/Y'),
            'list' => $data,
            'inventory' => $inventory,
            'delivery' => $newDeliData,
            'total' => $total
        ];

    }

    public function queryInventoryBasicReport($fromDate, $toDate){
        $query = DB::table(Helper::TABLE_INVENTORY);


    }
}
