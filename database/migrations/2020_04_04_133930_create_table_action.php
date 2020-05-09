<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableAction extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('action', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->integer('action_type_id')->nullable();
            $table->integer('inventory_id')->nullable();
            $table->integer('inventory_receive_id')->nullable();
            $table->integer('creator_id')->nullable();
            $table->integer('contract_id')->nullable();
            $table->integer('notification_id')->nullable();
            $table->string('code')->nullable();
            $table->bigInteger('quantity')->nullable();
            $table->bigInteger('amount')->nullable();
            $table->integer('invalid')->default(0);
            $table->integer('status')->default(23);
            $table->text('note')->nullable();
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
        Schema::dropIfExists('action');
    }
}
