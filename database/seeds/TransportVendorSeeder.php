<?php

use Illuminate\Database\Seeder;

class TransportVendorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 10; $i++) {
            DB::table('transport_vendor')->insert([
                'name' => 'công ty vận chuyển ' . $i ,
            ]);
        }
    }
}
