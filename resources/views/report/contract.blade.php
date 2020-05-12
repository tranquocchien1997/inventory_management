<!DOCTYPE html>
<html>
<head>
    <title>Report</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<h1 style="text-align: center;padding: 15px;padding-bottom: 0px;margin-bottom: 0px">{{ $title }}</h1>
<h2 style="text-align: center;padding-bottom: 15px;margin-top: 5px">{{ $sub_title }}</h2>

<style type="text/css">
    td, th {
        text-align: center;
        border: 1px solid;
        padding: 3px
    }

    body {
        font-family: DejaVu Sans;
        font-size: 12px;
    }

    .blank_row
    {
        height: 60px !important; /* overwrites any other rules */
        background-color: #FFFFFF;
    }
</style>
<table style="border-collapse: collapse;">
    <tr>
        <td style="" rowspan="2">STT</td>
        <td colspan="2">Hợp đồng</td>
        <td rowspan="2">Khách hàng</td>
        <td rowspan="2">Số lượng</td>
        <td rowspan="2">Đơn giá</td>
        <td rowspan="2">Tổng giá trị hợp đồng (USB)</td>
        <td rowspan="2">Phương thức thanh toán (LC, TT)</td>
        <td rowspan="2">Ngày cuối cùng phải giao hàng/thực hiện HĐ</td>
        <td colspan="3">Kế hoạch giao hàng thực hiện theo hợp đồng</td>
        <td colspan="2">Số lượng hàng đã giao</td>
        <td colspan="2">Dự kiến tiền về theo thực hiện hợp đồng</td>
        <td rowspan="2">Ngân hàng tiền về</td>
        <td colspan="2">Số tiền đã về theo từng hợp đồng</td>
        <td rowspan="2">Ghi chú</td>
        <td rowspan="2">Chưa về</td>
    </tr>
    <tr>
        <td>Số</td>
        <td>Ngày</td>
        <td>Ngày</td>
        <td>Số lượng</td>
        <td>USD</td>
        <td>Ngày</td>
        <td>Số lượng</td>
        <td>Ngày</td>
        <td>USD</td>
        <td>Ngày</td>
        <td>USD</td>
    </tr>
    <tr style="height: 60px !important;">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>

    <?php
        function formatDate($date){
            if (!$date) return;
            return \Carbon\Carbon::parse($date)->format('d/m/y');
        }
        function formatQuantity($qty){
            if (!$qty) return;

            return $qty.',0';
        }
        function formatAmount($amount){
            if (!$amount) return;

            return number_format($amount, 2);
        }

        $index = 0;
    ?>

    @foreach($list as $k => $items)
        <?php $index++; ?>
        @foreach($items as $key => $item)
            <tr>
                @if($key == 0)
                <td rowspan="{{ count($items) }}">{{ $index }}</td>
                <td rowspan="{{ count($items) }}">{{ $item->code }}</td>
                <td rowspan="{{ count($items) }}">{{ formatDate($item->date_created) }}</td>
                <td rowspan="{{ count($items) }}">{{ $item->company_name }}</td>
                <td rowspan="{{ count($items) }}">{{ formatQuantity($item->quantity) }}</td>
                <td rowspan="{{ count($items) }}">{{ formatAmount($item->amount) }}</td>
                <td rowspan="{{ count($items) }}">{{ formatAmount($item->total_amount)}}</td>
                <td rowspan="{{ count($items) }}">{{ $item->payment }}</td>
                <td rowspan="{{ count($items) }}">{{ formatDate($item->expired_delivery) }}</td>
                @endif
                <td>{{ formatDate($item->date_delivery) }}</td>
                <td>{{ formatQuantity($item->quantity_delivery) }}</td>
                <td>{{ formatAmount($item->amount_delivery) }}</td>
                <td>{{ formatDate($item->date_delivered) }}</td>
                <td>{{ formatQuantity($item->quantity_delivered) }}</td>
{{--                <td>{{ formatAmount($item->estimate_amount_receive) }}</td>--}}
                <td>{{ formatDate($item->estimate_date_amount_receive) }}</td>
                <td>{{ formatAmount($item->estimate_amount_receive) }}</td>
                @if($key == 0)
                <td rowspan="{{ count($items) }}">{{ $item->bank_name }}</td>
                @endif
                <td>{{ formatDate($item->date_amount_receive) }}</td>
                <td>{{ formatAmount($item->amount_receive) }}</td>
                <td></td>
                <td></td>
            </tr>
        @endforeach
    @endforeach

</table>
</body>
</html>
