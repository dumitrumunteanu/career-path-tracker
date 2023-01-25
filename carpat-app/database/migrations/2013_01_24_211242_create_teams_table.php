<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
//            $table->unsignedBigInteger('manager_id')->nullable();
            $table->string('name');
            $table->timestamps();

//            $table->foreign('manager_id', 'teams_manager_id_foreign')
//                ->references('id')
//                ->on('users')
//                ->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teams');
    }
};
