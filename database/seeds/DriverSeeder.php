<?php

use Illuminate\Database\Seeder;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 10; $i++) {
            DB::table('driver')->insert([
                'transport_type_id' => DB::table('reference')->where('type', \App\Helper::REFERENCE_TRANSPORT_TYPE)->inRandomOrder()->first()->id,
                'transport_vendor_id' => DB::table(\App\Helper::TABLE_TRANSPORT_VENDOR)->inRandomOrder()->first()->id,
                'name' => 'tài xế số ' . $i,
                'phone' => rand(100000000,999999999)
            ]);
        }
    }
}
