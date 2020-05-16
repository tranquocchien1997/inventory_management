<!DOCTYPE html>
<html>
<head>
    <title>Report</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<h1 style="text-align: center;padding: 15px;padding-bottom: 0px;margin-bottom: 0px">BÁO CÁO NHANH <br> TỔNG SẢN LƯỢNG TỒN KHO TOÀN CÔNG TY</h1>
<h2 style="text-align: center;padding-bottom: 15px;margin-top: 5px">{{ $sub_title }}</h2>

<style type="text/css">
    .main-table td, .main-table th {
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

    .total-table td {
        padding-right: 10px;
    }
</style>
<?php

function formatDate($date){
    if (!$date) return;
    return \Carbon\Carbon::parse($date)->format('d/m/y');
}
function formatQuantity($qty){
//    if (!$qty) return;
    if ($qty === null) return null;

    return number_format($qty, 2);
}
function formatAmount($amount){
    if (!$amount) return;

    return number_format($amount, 2);
}

$index = 0;
?>
<table class="main-table" style="border-collapse: collapse;width: 100%">
    <tr>
        <td colspan="2"></td>
        @foreach($com as $item)
            <td>{{$item['name']}}</td>
        @endforeach
        <td>Tổng cộng</td>
    </tr>
    <tr>
        <td colspan="2">Thống kê tại nhà máy</td>
        @foreach($com as $item)
            <td>{{formatQuantity($item['quantity'])}}</td>
        @endforeach
        <td>{{formatQuantity($total_com)}}</td>
    </tr>
    @foreach($enrol as $k => $item_group)
        <?php $index = 0;
        ?>
        @foreach($item_group as $group_key => $item)
            <?php $index ++;
            ?>
            <tr>
                @if ($index == 1)
                    <td rowspan="{{count($item_group)}}">{{$k}}</td>

                @endif
                <td>{{$group_key}}</td>
                @foreach($com_null as $index => $sub_item)
                    <?php
                        $total[$index] +=  isset($item['list'][$index]) ? $item['list'][$index] : 0;
                        $remain[$index] +=  isset($item['list'][$index]) ? $item['list'][$index] : 0;
                    ?>
                    <td>{{isset($item['list'][$index]) ? formatQuantity($item['list'][$index]) : $sub_item}}</td>
                @endforeach
                <td>{{formatQuantity($item['total'])}}</td>
            </tr>
        @endforeach

    @endforeach
    <tr>
        <td colspan="2">Hàng đi trên đường</td>
        @foreach($pending as $pend)
            <td>{{formatQuantity($pend)}}</td>
        @endforeach
        <td>{{formatQuantity(array_sum($pending))}}</td>
    </tr>
    <tr>
        <td colspan="2">Tổng cộng</td>
        @foreach($total as $item)
            <td>{{formatQuantity($item)}}</td>
        @endforeach
        <td>{{formatQuantity(array_sum($total))}}</td>

    </tr>
    <tr>
        <td colspan="2">Phải giao (HĐ đã ký)</td>
        @foreach($create as $item)
            <td>{{formatQuantity($item)}}</td>
        @endforeach
        <td>{{formatQuantity(array_sum($create))}}</td>

    </tr>
    <tr>
        <td colspan="2">Còn lại</td>
        @foreach($remain as $item)
            <td>{{formatQuantity($item)}}</td>
        @endforeach
        <td>{{formatQuantity(array_sum($remain))}}</td>
    </tr>
</table>


<table class="total-table" style="margin-top: 20px">
    <tr>
        <td style="text-align: left">Tổng lượng hàng tồn kho:</td>
        <td style="text-align: right">{{formatQuantity(array_sum($total))}}</td>
        <td colspan="2">tấn</td>
    </tr>
    <tr>
        <td style="text-align: left">Tổng lượng hàng phải giao:</td>
        <td style="text-align: right">{{formatQuantity(array_sum($create))}}</td>
        <td>tấn</td>
        <td>({{$create_str}})</td>
    </tr>
    <tr>
        <td style="text-align: left">Tổng lượng hàng còn lại:</td>
        <td style="text-align: right">{{formatQuantity(array_sum($remain))}}</td>
        <td colspan="2">tấn</td>
    </tr>
</table>
</body>
</html>
