<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class Helper
{
    const REFERENCE_PRODUCT_TYPE = 'product-type';
    const REFERENCE_PRODUCT = 'product';
    const REFERENCE_PRODUCT_SIZE = 'product-size';
    const REFERENCE_INVENTORY_TYPE = 'inventory-type';
    const REFERENCE_INVENTORY_ACTION = 'inventory-action';
    const REFERENCE_CONTRACT_TYPE = 'contract-type';
    const REFERENCE_STATUS = 'status';
    // const REFERENCE_CONTRACT_STATUS_TYPE = 'contract-status-type';
    const REFERENCE_TRANSPORT_TYPE = 'transport-type';
    const REFERENCE_DELIVERY_TYPE = 'delivery-type';

    const REFERENCE_REPORT_TYPE = 'report-type';
    const REFERENCE_PAYMENT_METHOD = 'payment-method';
    const REFERENCE_ROLE_TYPE = 'role-type';
    const REFERENCE_MODULE = 'module';
    const REFERENCE_BANK = 'bank';
    const REFERENCE_ACTION_TYPE = 'action-type';
    const REFERENCE_TABLE_NAME = 'table-name';
    const REFERENCE_DIRECTION = 'direction';

    const TABLE_TRANSPORT_VENDOR = 'transport_vendor';
    const TABLE_DRIVER = 'driver';
    const TABLE_TRANSPORT = 'transport';
    const TABLE_VEHICLE = 'vehicle';
    const TABLE_DELIVERY_LOG = 'delivery_logs';

    const TABLE_DELIVERY = 'delivery';
    const TABLE_DELIVERY_TRANSPORT = 'delivery_transport';
    const TABLE_DELIVERY_CONTRACT = 'delivery_contract';
    const TABLE_CUSTOMER = 'customer';
    const TABLE_CONTRACT = 'contract';
    const TABLE_INVENTORY = 'inventory';
    const TABLE_ACTION = 'action';
    const TABLE_NOTIFICATION = 'notification';

    const TABLE_USERS = 'users';
    const TABLE_ROLE = 'role';
    const TABLE_PERMISSION = 'permission';
    const TABLE_ROLE_PERMISSION = 'role_permission';

    const TABLE_MIGRATIONS = 'migrations';
    const TABLE_PASSWORD_RESETS = 'password_resets';
    const TABLE_REFERENCE = 'reference';
    const TABLE_NOTE = 'note';

    const RECORD_INVALID = 0;
    const RECORD_NOT_INVALID = 1;
    const RECORD_STATUS_NEW = 0;
    const RECORD_STATUS_SUCCESS = 0;

    const CONDITION_DEFAULT = [
        'condition' => [
            'invalid' => Helper::RECORD_INVALID,
        ],
        'select' => [],
        'join' => [],
        'sort' => ['id' => 'DESC'],
        'get' => true
    ];

    const DEFAULT_STATUS_ID = 23;

    public static function getModuleByRouteName($routeName){

        $config = [
            'api',
            'lists',
            'create',
            'update',
            'get',
            'softdelete',
            'trash',
            'delete',
            'restore',
            'reference',
            '.'
        ];

        return str_replace($config, '', $routeName);
    }

    public static function getMethodByRouteName($routeName)
    {
        $parse = explode(".", $routeName);
        return $parse[count($parse) - 1];
    }

    public static function calculateActionQuantity($actionTypeValue, $currentQuantity, $actionQuantity){
        switch ($actionTypeValue) {
            case 'nhap':
                return $currentQuantity + $actionQuantity;
            case 'xuat':
                return $currentQuantity - $actionQuantity;
            case 'huy':
                return $currentQuantity - $actionQuantity;
        }
    }

    public static function returnFunction($status = true, $code = 1, $msg = ''){
        return [
            'status' => $status,
            'code' => $code,
            'msg' => $msg
        ];
    }

    public static function getPermissionByUser(){
        $user = DB::table(Helper::TABLE_USERS)->find(Auth::id());

        return DB::table(Helper::TABLE_ROLE_PERMISSION)
            ->join('permission', 'permission.id', '=', 'role_permission.permission_id')
            ->where('role_permission.role_id', $user->role_id)
            ->select(['permission.method', 'permission.module'])
            ->get();
    }

    const MODULE = [
        [
            'display_value' => 'Phiếu kho',
            'value' => 'action',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Hợp đồng',
            'value' => 'contract',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Khách hàng',
            'value' => 'customer',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Vận chuyển',
            'value' => 'delivery',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Phân công vận chuyển',
            'value' => 'delivery_transport',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Người vận chuyển',
            'value' => 'driver',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Kho',
            'value' => 'inventory',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Phân quyền',
            'value' => 'role_permission',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Đơn vị vận chuyển',
            'value' => 'transport',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Đối tác vận chuyển',
            'value' => 'transport_vendor',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Tài khoản',
            'value' => 'user',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Phương tiện',
            'value' => 'vehicle',
            'type' => self::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Khách hàng',
            'value' => 'customer',
            'type' => Helper::REFERENCE_MODULE
        ],
        [
            'display_value' => 'Báo cáo',
            'value' => 'report',
            'type' => Helper::REFERENCE_MODULE
        ],
    ];

    const METHOD = [
        'list' => 'Danh sách',
        'edit' => 'Chỉnh sửa',
        'soft_delete' => 'Xoá',
        'delete' => 'Xoá vĩnh viễn',
        'create' => 'Tạo',
        'trash' => 'Xem thùng rác',
        'restore' => 'Phục hồi',
        'detail' => 'Chi tiết'
    ];


}
