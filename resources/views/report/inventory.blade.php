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
        font-size: 10px;
    }

    .blank_row {
        height: 60px !important; /* overwrites any other rules */
        background-color: #FFFFFF;
    }
</style>
<table style="border-collapse: collapse;">
    <tr>
        <td rowspan="2">STT</td>
        <td rowspan="2">Số hợp đồng</td>
        <td rowspan="2">Ngày hợp đồng</td>
        <td rowspan="2">Đơn giá</td>
        <td rowspan="2">Số lượng ký (tấn)</td>
        <td rowspan="2">Số lượng đã giao (tấn)</td>
        <td rowspan="2">Số lượng còn lại phải giao (tấn)</td>
        <td rowspan="2">Hàng đi trên đường</td>
        <td colspan="{{count($inventory)}}">Dự kiến số lượng phải giao của các đơn vị (tấn)</td>
    </tr>
    <tr>
        @foreach($inventory as $value)
            <td>{{$value->code}}</td>
        @endforeach
    </tr>
    <?php
    $index_direction = 0;
    $arr = [
        1 => 'I',
        2 => 'II',
        3 => 'III',
        4 => 'IV',
        5 => 'V',
        6 => 'VI',
        7 => 'VII',
        8 => 'VIII',
        9 => 'IX',
        10 => 'X'
    ];
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
    ?>
    @foreach($list as $key => $row)
        <?php
        $index_direction++;
        $index = 0;
        ?>
        <tr>
            <td>{{$arr[$index_direction]}}</td>
            <td colspan="{{7 + count($inventory) }}" style="text-align: left">{{$key}}</td>
        </tr>
        @foreach($row['lists'] as $item)
            <?php $index++; ?>
            <tr>
                <td>{{$index}}</td>
                <td>{{$item->code}}</td>
                <td>{{formatDate($item->date_created)}}</td>
                <td>{{formatAmount($item->amount)}}</td>
                <td>{{formatQuantity($item->quantity)}}</td>
                <td>{{formatQuantity($item->delivered_quantity)}}</td>
                <td>{{formatQuantity($item->quantity - $item->delivered_quantity)}}</td>
                <td></td>
                @foreach($item->inventory as $item_inventory)
                    <td>{{formatQuantity($item_inventory)}}</td>
                @endforeach
            </tr>
        @endforeach
            <tr>
                <td></td>
                <td>Cộng</td>
                <td></td>
                <td></td>
                <td>{{formatQuantity($row['summary']['quantity'])}}</td>
                <td>{{formatQuantity($row['summary']['delivered_quantity'])}}</td>
                <td>{{formatQuantity($row['summary']['remain_quantity'])}}</td>
                <td></td>
                @foreach($row['summary']['inventory'] as $key_summary => $summary)
                    @if ($key_summary)
                        <td>{{formatQuantity($summary)}}</td>
                    @endif
                @endforeach
            </tr>
    @endforeach
    <tr>
        <td>{{$arr[$index_direction + 1]}}</td>
        <td colspan="{{7 + count($inventory) }}" style="text-align: left">Hàng đi trên đường</td>
    </tr>
    <?php $index = 0; ?>
    @foreach($delivery['lists'] as $key => $item_deli)
        <?php $index ++; ?>
        <tr>
            <td>{{$index}}</td>
            <td>{{$key}}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{{formatQuantity($item_deli['sum'])}}</td>
            @foreach($item_deli['data'] as $item)
                <td>{{formatQuantity($item)}}</td>
            @endforeach
        </tr>
    @endforeach
    <tr>
        <td></td>
        <td>Cộng</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{$delivery['sum']['sum']}}</td>
        @foreach($delivery['sum']['inventory'] as $item)
            <td>{{$item}}</td>
        @endforeach
    </tr>
    <tr>
        <td colspan="2"> Tổng cộng (I + II + III + IV + V)</td>
        <td></td>
        <td></td>
        <td>{{formatQuantity($total['quantity'])}}</td>
        <td>{{formatQuantity($total['delivered'])}}</td>
        <td>{{formatQuantity($total['remain'])}}</td>
        <td></td>
{{--        <td></td>--}}
        @foreach($total['inventory'] as $item)
            <td>{{formatQuantity($item)}}</td>
        @endforeach
    </tr>
</table>
</body>
</html>
