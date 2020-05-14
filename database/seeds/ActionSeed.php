<?php

use Illuminate\Database\Seeder;

class ActionSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function __construct(\App\BaseModel $baseModel)
    {
        $this->base = $baseModel;
    }

    public function run()
    {

//        for ($i = 0; $i < 100; $i ++){
//
//            $inventory = DB::table(\App\Helper::TABLE_INVENTORY)->inRandomOrder()->first();
//            $actiontype = DB::table(\App\Helper::TABLE_REFERENCE)->where('type', 'action-type')->inRandomOrder()->first();
//            $quantity = rand(100, 9999);
//
//            $inventoryRecei = null;
//            if($actiontype->value == 'luan-chuyen'){
//                $inventoryRecei = DB::table(\App\Helper::TABLE_INVENTORY)->where('id', '<>', $inventory->id)->inRandomOrder()->first();
//            }
//
//            $action = DB::table(\App\Helper::TABLE_ACTION)->insertGetId([
//                'action_type_id' => $actiontype->id,
//                'inventory_id' => $inventory->id,
//                'inventory_receive_id' => $inventoryRecei ? $inventoryRecei->id : $inventoryRecei,
//                'creator_id' => DB::table('users')->inRandomOrder()->first()->id,
//                'code' => Str::random(6),
//                'quantity' => $quantity,
//                'amount' => rand(100000, 900000000)
//            ]);
//
//        }

        $all_inventory = DB::table(\App\Helper::TABLE_INVENTORY)->get();

        $type_com = DB::table(\App\Helper::TABLE_REFERENCE)->where([
                'type'=> \App\Helper::REFERENCE_INVENTORY_TYPE,
                'value' => 'kho-hang'
            ])->first();

        $type_thue = DB::table(\App\Helper::TABLE_REFERENCE)->where([
            'type'=> \App\Helper::REFERENCE_INVENTORY_TYPE,
            'value' => 'kho-thue'
        ])->first();
//
//        $type_ = DB::table(\App\Helper::TABLE_REFERENCE)->where([
//            'type'=> \App\Helper::REFERENCE_INVENTORY_TYPE,
//            'value' => 'kho-hang'
//        ])->first();

        $inven_company = DB::table(\App\Helper::TABLE_INVENTORY)->where('type', $type_com->id)->get();

//        $inven_thue = DB::table(\App\Helper::TABLE_INVENTORY)->where('type', $type_thue->id)->get();

        $nhap = DB::table(\App\Helper::TABLE_REFERENCE)->where([
                'type'=> 'action-type',
                'value' => 'nhap'
            ])->first();

        $xuat = DB::table(\App\Helper::TABLE_REFERENCE)->where([
                'type'=> 'action-type',
                'value' => 'xuat'
            ])->first();

        $chuyen = DB::table(\App\Helper::TABLE_REFERENCE)->where([
            'type'=> 'action-type',
            'value' => 'luan-chuyen'
        ])->first();
//        $actiontype = DB::table(\App\Helper::TABLE_REFERENCE)->where('type', 'action-type')->inRandomOrder()->first();

        $nhap_data = [];

        foreach ($inven_company as $item){
            $value = rand(1000, 9000) + 1.5;

            $nhap_data[$item->id] = $value;

            $action = DB::table(\App\Helper::TABLE_ACTION)->insertGetId([
                'action_type_id' => $nhap->id,
                'inventory_id' => $item->id,
                'creator_id' => DB::table('users')->inRandomOrder()->first()->id,
                'code' => Str::random(6),
                'quantity' => $value,
//                'amount' => $value,
                'status' => \App\Helper::SUCCESS_STATUS_ID
            ]);
        }

        foreach ($nhap_data as $key => $item){

            $invetoryRecei = DB::table(\App\Helper::TABLE_INVENTORY)->where('type', $type_thue->id)->inRandomOrder()->first();

            $action = DB::table(\App\Helper::TABLE_ACTION)->insertGetId([
                'action_type_id' => $chuyen->id,
                'inventory_id' => $key,
                'inventory_receive_id' => $invetoryRecei ? $invetoryRecei->id : null,
                'creator_id' => DB::table('users')->inRandomOrder()->first()->id,
                'code' => Str::random(6),
                'quantity' => $item,
//                'amount' => $value,
                'status' => \App\Helper::SUCCESS_STATUS_ID
            ]);

            $detail = json_decode($invetoryRecei->detail, true);
//            info($detail);
            if (empty($detail) || !isset($detail[$key]) || empty($detail[$key])){
                $detail[$key] = $item;
            }else{
//                info($detail);
//                info($detail->$key);
//                info($item);
                $detail[$key] = $detail[$key] + $item;
            }
//            info($detail);

            $hihi = DB::table(\App\Helper::TABLE_INVENTORY)->where('id', $invetoryRecei->id)->first();

            DB::table(\App\Helper::TABLE_INVENTORY)->where('id', $invetoryRecei->id)->update([
                'detail' => json_encode($detail),
                'quantity' => $hihi->quantity + $item,
                'current_quantity' => $hihi->quantity + $item
            ]);

        }

        for ($i = 0; $i < 20; $i ++){

            $action = DB::table(\App\Helper::TABLE_ACTION)->where('action_type_id', $chuyen->id)->inRandomOrder()->first();

            DB::table(\App\Helper::TABLE_ACTION)->insertGetId([
                'action_type_id' => $xuat->id,
                'inventory_id' => $action->inventory_id,
//                'inventory_product_id' => $action->inventory_product_id,
                'creator_id' => DB::table('users')->inRandomOrder()->first()->id,
                'code' => Str::random(6),
                'quantity' => rand(20, 100),
                'status' => \App\Helper::SUCCESS_STATUS_ID
            ]);
        }



//        for ($i = 0; $i < 20; $i ++)


    }
}
