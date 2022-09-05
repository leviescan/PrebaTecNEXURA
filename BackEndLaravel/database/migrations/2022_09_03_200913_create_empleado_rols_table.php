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
        Schema::create('empleado_rols', function (Blueprint $table) {
            $table->integer('empleado_id')->unsigned();
            $table->integer('rol_id')->unsigned();
            $table->foreign('empleado_id')->references('id')->on('empleados')
            ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('rol_id')->references('id')->on('rols')
            ->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empleado_rols');
    }
};
