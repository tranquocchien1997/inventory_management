<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnQuantityBusiness extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('inventory', function (Blueprint $table)  {
            $table->integer('quantity_business')->default(0);
        });

        $inventory = \Illuminate\Support\Facades\DB::table('inventory')->get();

        foreach ($inventory as $item) {
            DB::table('inventory')->where('id', $item->id)->update([
                'quantity_business' => $item->current_quantity
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
