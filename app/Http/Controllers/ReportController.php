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
//        type: 1
//        from_date: 06/05/2020
//        to_date: 06/05/2020

        $fromDate = $request->from_date;

        $toDate = $request->to_date;

        if (!$toDate){
            $toDate = Carbon::now()->format('YYYY-MM-DD');
        }

        if ($request->type == 1){
            $paper = 'a3';
            $data = [
                'title' => 'THEO DÕI THỰC HIỆN HỢP ĐỒNG  BÁN ĐƯỜNG BIỂN',
                'sub_title' => 'Năm '. Carbon::now()->format('YYYY'),
                'list' => DB::table(Helper::TABLE_CONTRACT)->whereRaw(
                    "(created_at >= ? AND created_at <= ?)",
                    [$fromDate." 00:00:00", $toDate." 23:59:59"]
                )->get()
            ];
        }else{
            $paper = 'a4';
        }

        $title = $data['title'];
        $sub_title = $data['sub_title'];
        $list = $data['list'];
        return view('report.contract', compact('title','sub_title','list'));

//        $data = ['title' => 'Welcome to HDTuto.com'];
        $pdf = PDF::loadView('report.contract', $data)->setPaper($paper, 'landscape');

//        return $pdf->download('itsolutionstuff.pdf');

        return $pdf->stream();

//        return BaseController::apiResponse(true);
    }
}
