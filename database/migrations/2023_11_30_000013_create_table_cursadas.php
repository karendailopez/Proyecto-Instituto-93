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
        Schema::create('cursadas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('curso_materia_id');
            $table->unsignedBigInteger('ciclo_lectivo_id');
            $table->integer('cantidad_alumnos')->nullable();
            $table->integer('cantidad_alumnos_recursantes')->nullable();
            $table->integer('cantidad_alumnos_desertores')->nullable();
            $table->integer('hora_catedra')->nullable();
            $table->date('fecha_asistencia')->nullable();
            $table->decimal('porcentaje_asistencia', 18)->nullable();
            $table->timestamps();

            $table->foreign('curso_materia_id')->references('id')->on('curso_materias')->onDelete('CASCADE');
            $table->foreign('ciclo_lectivo_id')->references('id')->on('ciclo_lectivos')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cursadas');
    }
};
