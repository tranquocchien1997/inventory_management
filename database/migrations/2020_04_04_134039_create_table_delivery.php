<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableDelivery extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->integer('delivery_type_id')->nullable();
            $table->integer('notification_id')->nullable();
            $table->integer('contract_id')->nullable();

            $table->integer('bank_id')->nullable();
            $table->dateTime('date_delivery')->nullable();
            $table->float('quantity_delivery', 8, 3)->nullable();
            $table->bigInteger('amount_delivery')->nullable();
            $table->dateTime('date_delivered')->nullable();
            $table->float('quantity_delivered', 8, 3)->nullable();
            $table->bigInteger('estimate_amount_receive')->nullable();
            $table->dateTime('estimate_date_amount_receive')->nullable();
            $table->bigInteger('amount_receive')->nullable();
            $table->dateTime('date_amount_receive')->nullable();
            $table->text('note')->nullable();
            $table->integer('invalid')->default(0);
            $table->integer('status')->default(0);
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('delivery');
    }
}
