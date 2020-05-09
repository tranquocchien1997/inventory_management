<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableDeliveryTransport extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_transport', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('action_id')->nullable();
            $table->integer('delivery_id')->nullable();
            $table->integer('inventory_id')->nullable();
            $table->integer('transport_id')->nullable();
            $table->bigInteger('amount')->nullable();
            $table->bigInteger('amount_finish')->nullable();
            $table->string('departure')->nullable();
            $table->string('destination')->nullable();
            $table->dateTime('date_start')->nullable();
            $table->dateTime('date_end')->nullable();
            $table->text('note')->nullable();
            $table->integer('invalid')->default(0);
            $table->integer('status')->default(23);
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
        Schema::dropIfExists('delivery_transport');
    }
}
