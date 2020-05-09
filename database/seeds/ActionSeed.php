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

        for ($i = 0; $i < 100; $i ++){

            $inventory = DB::table(\App\Helper::TABLE_INVENTORY)->inRandomOrder()->first();
            $actiontype = DB::table(\App\Helper::TABLE_REFERENCE)->where('type', 'action-type')->inRandomOrder()->first();
            $quantity = rand(100, 9999);

            $inventoryRecei = null;
            if($actiontype->value == 'luan-chuyen'){
                $inventoryRecei = DB::table(\App\Helper::TABLE_INVENTORY)->where('id', '<>', $inventory->id)->inRandomOrder()->first();
            }

            $action = DB::table(\App\Helper::TABLE_ACTION)->insertGetId([
                'action_type_id' => $actiontype->id,
                'inventory_id' => $inventory->id,
                'inventory_receive_id' => $inventoryRecei ? $inventoryRecei->id : $inventoryRecei,
                'creator_id' => DB::table('users')->inRandomOrder()->first()->id,
                'code' => Str::random(6),
                'quantity' => $quantity,
                'amount' => rand(100000, 900000000)
            ]);

            $this->base->processActionQuantity($inventory, $this->base->getById(\App\Helper::TABLE_ACTION,$action),$inventoryRecei);
        }
    }
}
