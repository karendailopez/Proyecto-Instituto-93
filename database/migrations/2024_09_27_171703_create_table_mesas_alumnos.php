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
        Schema::create('mesa_alumnos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mesa_id'); 
            $table->unsignedBigInteger('alumno_carrera_id')->nullable(); 
            $table->unsignedBigInteger('cursada_alumno_id')->nullable(); 
            $table->unsignedBigInteger('mesa_alumno_estado_id');
            $table->integer('nota_numerica')->nullable(); 
            $table->string('nota_letras', 20)->nullable(); 
            $table->timestamps(); 

            
            $table->foreign('mesa_id')->references('id')->on('mesas');
            $table->foreign('alumno_carrera_id')->references('id')->on('alumno_carreras');
            $table->foreign('cursada_alumno_id')->references('id')->on('cursada_alumnos');
            $table->foreign('mesa_alumno_estado_id')->references('id')->on('mesa_alumno_estados');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mesa_alumnos');
    }
};

