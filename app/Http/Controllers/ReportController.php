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
            $query = DB::table(Helper::TABLE_CONTRACT)
                ->whereRaw("(contract.created_at >= ? AND contract.created_at <= ?)", [Carbon::createFromFormat('d/m/Y',$fromDate)->format('Y-m-d') . " 00:00:00", Carbon::createFromFormat('d/m/Y',$toDate)->format('Y-m-d') . " 23:59:59"])
                ->leftJoin('customer', 'customer.id', '=', 'customer_id')
                ->leftJoin('reference', 'reference.id', '=', 'payment_method')
                ->leftJoin('delivery_contract', 'contract.id', '=', 'contract_id')
                ->leftjoin('delivery', 'delivery.id', '=', 'delivery_contract.delivery_id')
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
           // dd($request->all());

            foreach ($query as $item){
                if ($item->contract_id){
                    $newData[$item->contract_id][$item->delivery_id] = $item;
                }
            }


            foreach ($newData as $k => $value){
                $newData[$k] = array_values($newData[$k]);
            }

            $data = [
                'title' => 'THEO DÕI THỰC HIỆN HỢP ĐỒNG  BÁN ĐƯỜNG BIỂN',
                'sub_title' => 'Năm ' . Carbon::now()->format('Y'),
                'list' => array_values($newData)
            ];
        } else {
            $paper = 'a4';
        }

//        $title = $data['title'];
//        $sub_title = $data['sub_title'];
//        $list = $data['list'];
////        dd($list);
//        return view('report.contract', compact('title', 'sub_title', 'list'));

        $pdf = PDF::loadView('report.contract', $data)->setPaper($paper, 'landscape');

//        return $pdf->download('itsolutionstuff.pdf');

        return $pdf->stream();

//        return BaseController::apiResponse(true);
    }
}
