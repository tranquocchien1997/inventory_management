<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DeliverySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 30; $i++) {
        	$delivery = DB::table("delivery")->insertGetId([
        		'code' => Str::random(),
        		'bank_id' => DB::table(\App\Helper::TABLE_REFERENCE)->where('type', 'bank')->inRandomOrder()->first()->id,
        		'date_delivery' => Carbon::now(),
        		'quantity_delivery' => rand(100, 9999),
        		'amount_delivery' => rand(100, 99999),
        		'date_delivered' => Carbon::now(),
        		'quantity_delivered' => rand(1000, 9999),
                'contract_id' => DB::table('contract')->inRandomOrder()->first()->id,
        		'estimate_amount_receive' => rand(100, 9999),
        		'estimate_date_amount_receive' => Carbon::now(),
        		'amount_receive' => rand(100, 9999),
        		'date_amount_receive' => Carbon::now()
        	]);
        }
    }
}
