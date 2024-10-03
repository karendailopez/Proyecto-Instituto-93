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
        Schema::create('mesas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('curso_materia_id'); 
            $table->dateTime('fecha_hora_1'); 
            $table->dateTime('fecha_hora_2')->nullable(); 
            $table->unsignedBigInteger('personal_presidente_id'); 
            $table->unsignedBigInteger('personal_auxiliar_id'); 
            $table->string('libro', 4)->nullable();
            $table->string('folio', 4)->nullable(); 
            $table->integer('total_alumnos'); 
            $table->integer('total_ausentes'); 
            $table->integer('total_aprobados');
            $table->integer('total_aplazados'); 
            $table->timestamps();

            
            $table->foreign('curso_materia_id')->references('id')->on('curso_materias');
            $table->foreign('personal_presidente_id')->references('id')->on('personal');
            $table->foreign('personal_auxiliar_id')->references('id')->on('personal');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mesas');
    }
};