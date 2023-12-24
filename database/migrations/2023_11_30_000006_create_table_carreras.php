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
        Schema::create('carreras', function (Blueprint $table) {
            $table->id();
            $table->string('titulo', 255);
            $table->string('nombre', 255);
            $table->string('descripcion_corta', 50)->nullable();
            $table->string('jefe_catedra', 50)->nullable();
            $table->integer('anio_inicio');
            $table->integer('anio_fin')->nullable();
            $table->string('archivo_plan_studio', 255)->nullable();
            $table->string('archivo_correlatividades', 255)->nullable();
            $table->string('imagen_descriptiva', 255)->nullable();
            $table->string('numero_expediente', 50)->nullable();
            $table->string('numero_resolucion', 50)->nullable();
            $table->integer('numero_institucion')->nullable();
            $table->integer('cantidad_horas');
            $table->integer('duracion');
            $table->unsignedBigInteger('carrera_estado_id');
            $table->boolean('active');
            $table->boolean('mostrar_inscripcion');
            $table->timestamps();

            $table->foreign('carrera_estado_id')->references('id')->on('carrera_estados')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carreras');
    }
};
