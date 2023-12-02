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
        Schema::create('carrera_anios', function (Blueprint $table) {
            $table->id();
            $table->integer('carrera_anio');
            $table->integer('cantidad_materias')->nullable();
            $table->integer('cargar_horaria_completa')->nullable();
            $table->unsignedBigInteger('carrera_id');
            $table->timestamps();

            $table->foreign('carrera_id')->references('id')->on('carreras')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carrera_anios');
    }
};
