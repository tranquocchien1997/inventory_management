<?php

use App\Helper;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 6; $i++) {
            $qty = 0;
            DB::table('inventory')->insert([
                'user_id' => DB::table('users')->inRandomOrder()->first()->id,
                'code' => 'Kho thuê '.$i,
                'type' => DB::table(Helper::TABLE_REFERENCE)->where('type', Helper::REFERENCE_INVENTORY_TYPE)->where('value', 'kho-thue')->inRandomOrder()->first()->id,
                'name' => 'Kho thuê '.$i,
                'address' => 'tp Ho chi minh',
                'quantity' => $qty,
                'current_quantity' => $qty,
                'description' => 'đây là mô tả nè'
            ]);
        }

        for ($i=0; $i < 6; $i++) {
            $qty = 0;
            DB::table('inventory')->insert([
                'user_id' => DB::table('users')->inRandomOrder()->first()->id,
                'code' => 'Kho hàng '.$i,
                'type' => DB::table(Helper::TABLE_REFERENCE)->where('type', Helper::REFERENCE_INVENTORY_TYPE)->where('value', 'kho-hang')->inRandomOrder()->first()->id,
                'name' => 'Kho số '.$i,
                'address' => 'tp Ho chi minh',
                'quantity' => $qty,
                'current_quantity' => $qty,
                'description' => 'đây là mô tả nè'
            ]);
        }
    }
}
