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
        Schema::create('cursada_alumnos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('alumno_carrera_id');
            $table->unsignedBigInteger('cursada_id');
            $table->unsignedBigInteger('ciclo_lectivo_id');
            $table->unsignedBigInteger('cursada_estado_id');
            $table->integer('horas_cursadas')->nullable();
            $table->date('ultimo_presentismo')->nullable();
            $table->decimal('porcentaje_presentismo')->nullable();
            $table->boolean('active');
            $table->timestamps();

            $table->foreign('alumno_carrera_id')->references('id')->on('alumno_carreras')->onDelete('CASCADE');
            $table->foreign('cursada_id')->references('id')->on('cursadas')->onDelete('CASCADE');
            $table->foreign('ciclo_lectivo_id')->references('id')->on('ciclo_lectivos')->onDelete('CASCADE');
            $table->foreign('cursada_estado_id')->references('id')->on('cursada_estados')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cursada_alumnos');
    }
};
