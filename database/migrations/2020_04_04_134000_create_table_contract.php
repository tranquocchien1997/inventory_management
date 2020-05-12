<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableContract extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('contract_type_id')->nullable();
            $table->integer('customer_id')->nullable();
            $table->integer('direction_id')->nullable();
            $table->integer('creator_id')->nullable();
            $table->string('code')->nullable();
            $table->float('quantity', 8, 3)->nullable();
            $table->bigInteger('amount')->nullable();
            $table->bigInteger('total_amount')->nullable();
            $table->integer('payment_method')->nullable();
            $table->float('delivered_quantity', 8, 3)->nullable();
            $table->float('received_quantity', 8, 3)->nullable();
            $table->dateTime('expired_delivery')->nullable();
            $table->dateTime('date_created')->nullable();
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
        Schema::dropIfExists('contract');
    }
}
