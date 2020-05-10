<?php
use App\Helper;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReferenceSeeder extends Seeder
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
                'display_value' => 'Tin bột sắn',
                'value' => 'tinh-bot-san',
                'type' => Helper::REFERENCE_PRODUCT
            ],
            [
                'display_value' => 'Tin bột sắn',
                'value' => 'tinh-bot-san',
                'type' => Helper::REFERENCE_PRODUCT_TYPE
            ],
            [
                'display_value' => 'PP-PE 20kg',
                'value' => 20,
                'type' => Helper::REFERENCE_PRODUCT_SIZE
            ],
            [
                'display_value' => 'PP-PE 50kg',
                'value' => 50,
                'type' => Helper::REFERENCE_PRODUCT_SIZE
            ],
            [
                'display_value' => 'Jumbo 850kg',
                'value' => 850,
                'type' => Helper::REFERENCE_PRODUCT_SIZE
            ],
            [
                'display_value' => 'Kho hàng',
                'value' => 'kho-hang',
                'type' => Helper::REFERENCE_INVENTORY_TYPE
            ],
            [
                'display_value' => 'Kho thuê',
                'value' => 'kho-thue',
                'type' => Helper::REFERENCE_INVENTORY_TYPE
            ],
            [
                'display_value' => 'Kho trung gian',
                'value' => 'kho-trung-gian',
                'type' => Helper::REFERENCE_INVENTORY_TYPE
            ],
            [
                'display_value' => 'Kho hàng lênh đênh',
                'value' => 'kho-lenh-denh',
                'type' => Helper::REFERENCE_INVENTORY_TYPE
            ],
            [
                'display_value' => 'Nhập',
                'value' => 'nhap',
                'type' => Helper::REFERENCE_ACTION_TYPE
            ],
            [
                'display_value' => 'Xuất',
                'value' => 'xuat',
                'type' => Helper::REFERENCE_ACTION_TYPE
            ],
            [
                'display_value' => 'Luân chuyển',
                'value' => 'luan-chuyen',
                'type' => Helper::REFERENCE_ACTION_TYPE
            ],
            [
                'display_value' => 'Huỷ',
                'value' => 'huy',
                'type' => Helper::REFERENCE_ACTION_TYPE
            ],
            [
                'display_value' => 'Qua 1 đơn vị vận chuyển',
                'value' => 'mot-don-vi',
                'type' => Helper::REFERENCE_DELIVERY_TYPE
            ],
            [
                'display_value' => 'Qua nhiều đơn vị vận chuyển',
                'value' => 'nhieu-don-vi',
                'type' => Helper::REFERENCE_DELIVERY_TYPE
            ],
            [
                'display_value' => 'Chuyển khoản',
                'value' => 'chuyen-khoan',
                'type' => Helper::REFERENCE_PAYMENT_METHOD
            ],
            [
                'display_value' => 'Tiền mặt',
                'value' => 'tien-mat',
                'type' => Helper::REFERENCE_PAYMENT_METHOD
            ],
            [
                'display_value' => 'VCB',
                'value' => 'vcb',
                'type' => Helper::REFERENCE_BANK
            ],
            [
                'display_value' => 'Tàu lửa',
                'value' => 'tau-lua',
                'type' => Helper::REFERENCE_TRANSPORT_TYPE
            ],
            [
                'display_value' => 'Xà lang',
                'value' => 'xa-lang',
                'type' => Helper::REFERENCE_TRANSPORT_TYPE
            ],
            [
                'display_value' => 'Xe tải',
                'value' => 'xe-tai',
                'type' => Helper::REFERENCE_TRANSPORT_TYPE
            ],
            [
                'display_value' => 'Container',
                'value' => 'container',
                'type' => Helper::REFERENCE_TRANSPORT_TYPE
            ],
            [
                'display_value' => 'Vừa tạo',
                'value' => 'vua-tao',
                'type' => Helper::REFERENCE_STATUS
            ],
            [
                'display_value' => 'Đang thực hiện',
                'value' => 'dang-thuc-hien',
                'type' => Helper::REFERENCE_STATUS
            ],
            [
                'display_value' => 'Hoàn tất',
                'value' => 'hoan-tat',
                'type' => Helper::REFERENCE_STATUS
            ],
            [
                'display_value' => 'Huỷ',
                'value' => 'huy',
                'type' => Helper::REFERENCE_STATUS
            ],
            [
                'display_value' => 'Móng cái',
                'value' => 'mong-cai',
                'type' => Helper::REFERENCE_DIRECTION
            ],
            [
                'display_value' => 'Lạng Sơn',
                'value' => 'lang-son',
                'type' => Helper::REFERENCE_DIRECTION
            ],
            [
                'display_value' => 'Cont TPHCM',
                'value' => 'cont-hcm',
                'type' => Helper::REFERENCE_DIRECTION
            ],
            [
                'display_value' => 'Cont Đà Nẵng',
                'value' => 'cont-da-nang',
                'type' => Helper::REFERENCE_DIRECTION
            ],
            [
                'display_value' => 'Nội địa',
                'value' => 'noi-dia',
                'type' => Helper::REFERENCE_DIRECTION
            ],
            // [
            //     'display_value' => '',
            //     'type' => ''
            // ],
        ];

        foreach($data as $item){
            $get = DB::table(Helper::TABLE_REFERENCE)->where([
                'value' => $item['value'],
                'type' => $item['type']
            ])->first();

            if(empty($get)){
                DB::table(Helper::TABLE_REFERENCE)->insert($item);
            }else{
                DB::table(Helper::TABLE_REFERENCE)->where([
                    'value' => (string) $item['value'],
                    'type' => (string) $item['type']
                ])->update($item);
            }
        }
    }
}
