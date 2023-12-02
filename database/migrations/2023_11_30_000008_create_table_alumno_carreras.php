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
        Schema::create('alumno_carreras', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('carrera_id');
            $table->unsignedBigInteger('alumno_id');
            $table->unsignedBigInteger('ciclo_lectivo_id')->nullable();
            $table->date('fecha_baja')->nullable();
            $table->boolean('inicializado')->nullable();
            $table->boolean('active')->nullable();

            $table->foreign('ciclo_lectivo_id')->references('id')->on('ciclo_lectivos')->onDelete('SET NULL');
            $table->foreign('alumno_id')->references('id')->on('alumnos')->onDelete('CASCADE');
            $table->foreign('carrera_id')->references('id')->on('carreras')->onDelete('CASCADE');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumno_carreras');
    }
};
