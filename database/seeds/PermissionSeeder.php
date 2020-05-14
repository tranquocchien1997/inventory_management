<?php

use Illuminate\Database\Seeder;
use App\Helper;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'display_value' => 'Phiếu kho',
                'value' => 'action',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Hợp đồng',
                'value' => 'contract',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Khách hàng',
                'value' => 'action',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Vận chuyển',
                'value' => 'delivery',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Phân công vận chuyển',
                'value' => 'delivery_transport',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Người vận chuyển',
                'value' => 'driver',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Kho',
                'value' => 'inventory',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Phân quyền',
                'value' => 'role_permission',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Đơn vị vận chuyển',
                'value' => 'transport',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Đối tác vận chuyển',
                'value' => 'transport_vendor',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Tài khoản',
                'value' => 'user',
                'type' => Helper::REFERENCE_MODULE
            ],
            [
                'display_value' => 'Phương tiện',
                'value' => 'vehicle',
                'type' => Helper::REFERENCE_MODULE
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
            [
                'display_value' => 'Thông báo',
                'value' => 'notification',
                'type' => Helper::REFERENCE_MODULE
            ],
        ];

        $method = [
            'list' => 'Danh sách',
            'edit' => 'Chỉnh sửa',
            'soft_delete' => 'Xoá',
            'delete' => 'Xoá vĩnh viễn',
            'create' => 'Tạo',
            'trash' => 'Xem thùng rác',
            'restore' => 'Phục hồi',
            'detail' => 'Chi tiết'
        ];

        foreach($data as $item){
            foreach ($method as $key => $value){

                DB::table(Helper::TABLE_ROLE_PERMISSION)->insert([
                    'role_id' => 1,
                    'permission_id' => DB::table(Helper::TABLE_PERMISSION)->insertGetId([
                        'method' => $key,
                        'module' => $item['value']
                    ])
                ]);

            }
        }

        DB::table('role')->insert(['name' => 'Admin']);


        $user = DB::table('users')->where('id', 1)->update(['role_id' => 1]);


    }
}
