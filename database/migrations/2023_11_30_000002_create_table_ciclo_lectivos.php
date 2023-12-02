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
        Schema::create('ciclo_lectivos', function (Blueprint $table) {
            $table->id();
            $table->integer('anio_lectivo')->unique();
            $table->integer('cantidad_semana');
            $table->date('fecha_inicio')->nullable();
            $table->date('fecha_cierre')->nullable();
            $table->date('fecha_inscripcion_inicio')->nullable();
            $table->date('fecha_inscripcion_cierre')->nullable();
            $table->date('fecha_marzo_inicio')->nullable();
            $table->date('fecha_marzo_cierre')->nullable();
            $table->date('fecha_junio_inicio')->nullable();
            $table->date('fecha_junio_cierre')->nullable();
            $table->date('fecha_diciembre_inicio')->nullable();
            $table->date('fecha_diciembre_cierre')->nullable();
            $table->date('fecha_especial_inicio')->nullable();
            $table->date('fecha_especial_cierre')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ciclo_lectivos');
    }
};
