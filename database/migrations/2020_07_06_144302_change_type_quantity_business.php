<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeTypeQuantityBusiness extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('inventory', function (Blueprint $table) {
            $table->dropColumn('quantity_business');
        });

        Schema::table('inventory', function (Blueprint $table) {
            $table->float('quantity_business', 8, 3)->default(0);
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
        Schema::table('inventory', function (Blueprint $table) {
        });
    }
}
