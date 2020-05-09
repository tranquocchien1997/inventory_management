<?php

use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 10; $i++) {
            DB::table('vehicle')->insert([
                'transport_type_id' => DB::table('reference')->where('type', \App\Helper::REFERENCE_TRANSPORT_TYPE)->inRandomOrder()->first()->id,
                'transport_vendor_id' => DB::table(\App\Helper::TABLE_TRANSPORT_VENDOR)->inRandomOrder()->first()->id,
                'code' => Str::random(6),
                'name' => 'xe tải ' . $i
            ]);
        }
    }
}
