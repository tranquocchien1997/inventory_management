<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatusPaymentDelivery extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::table('delivery', function (Blueprint $table)  {
            $default = \Illuminate\Support\Facades\DB::table('reference')
                ->where('value', 'chua-thanh-toan')
                ->first();
            $table->integer('status_payment')->default($default->id);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('delivery', function (Blueprint $table) {
            //
        });
    }
}
