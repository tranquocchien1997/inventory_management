<?php

use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 10; $i++) {
            DB::table('customer')->insert([
                'company_name' => 'công ty ' . $i ,
                'contact_name' => 'người liên hệ ' . $i ,
            ]);
        }
    }
}
