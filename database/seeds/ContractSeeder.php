<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ContractSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table(\App\Helper::TABLE_REFERENCE)->where('type', 'action-type')->inRandomOrder()->first()
        for ($i = 0; $i < 10; $i++) {
            $quantity = rand(1500, 2000);
            $delivered = rand(1000, 1500);
            $a = DB::table("contract")->insertGetId(
                [
                    'customer_id' => DB::table('customer')->inRandomOrder()->first()->id,
                    'creator_id' => DB::table('users')->inRandomOrder()->first()->id,
                    'direction_id' => DB::table(\App\Helper::TABLE_REFERENCE)->where('type', 'direction')->inRandomOrder()->first()->id,
                    'code' => 'HĐ' . $i,
                    'quantity' => $quantity,
                    'amount' => rand(1000, 2999),
                    'total_amount' => rand(100, 9999),
                    'payment_method' => DB::table('reference')->where('type', 'payment-method')->inRandomOrder()->first()->id,
                    'delivered_quantity' => $delivered,
                    'received_quantity' => $quantity - $delivered,
                    'expired_delivery' => Carbon::now(),
                    'date_created' => Carbon::now()
                ]
            );
            $count = rand(1, 3);
            $xuat = DB::table(\App\Helper::TABLE_REFERENCE)->where([
                'type' => 'action-type',
                'value' => 'xuat'
            ])->first();

            for ($j = 0; $j < $count; $j++) {
                $sub = rand(500, $quantity);
                $quantity = $quantity - $sub;

                if ($quantity > 0){

                    DB::table(\App\Helper::TABLE_ACTION)->insertGetId([
                        'action_type_id' => $xuat->id,
                        'inventory_id' => DB::table(\App\Helper::TABLE_INVENTORY)->inRandomOrder()->first()->id,
                        'contract_id' => $a,
                        'creator_id' => DB::table('users')->inRandomOrder()->first()->id,
                        'code' => Str::random(6),
                        'quantity' => $sub,
                        'status' => \App\Helper::SUCCESS_STATUS_ID
                    ]);
                }
            }
        }
    }
}
