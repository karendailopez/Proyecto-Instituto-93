<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('materias', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion', 255);
            $table->unsignedBigInteger('carrera_anio_id');
            $table->unsignedBigInteger('espacio_materia_id');
            $table->integer('carga_horaria');
            $table->integer('modulos');
            $table->boolean('active');
            $table->timestamps();

            $table->foreign('carrera_anio_id')->references('id')->on('carrera_anios')->onDelete('CASCADE');
            $table->foreign('espacio_materia_id')->references('id')->on('espacio_materias')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materias');
    }
};
