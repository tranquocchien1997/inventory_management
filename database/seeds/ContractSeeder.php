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
       for ($i=0; $i < 30; $i++) {
       		DB::table("contract")->insert(
       			[
	       			'customer_id' => DB::table('customer')->inRandomOrder()->first()->id,
	       			'creator_id' => DB::table('users')->inRandomOrder()->first()->id,
	       			'direction_id' => DB::table(\App\Helper::TABLE_REFERENCE)->where('type', 'direction')->inRandomOrder()->first()->id,
	       			'code' => Str::random(6),
	       			'quantity' => rand(100, 99999),
                    'amount' => rand(1000, 99999),
                    'total_amount' => rand(100, 9999),
	       			'payment_method' => DB::table('reference')->where('type', 'payment-method')->inRandomOrder()->first()->id,
	       			'delivered_quantity' => rand(100, 9999),
	       			'received_quantity' => rand(100, 9999),
	       			'expired_delivery' => Carbon::now(),
	       			'date_created' => Carbon::now()
       			]
       		);
       }
    }
}
