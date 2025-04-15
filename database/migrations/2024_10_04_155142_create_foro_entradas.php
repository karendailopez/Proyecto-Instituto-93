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
        Schema::create('foro_entradas', function (Blueprint $table) {
            $table->id();
            $table->string('titulo', 50); 
            $table->string('texto_html', 500); 
            $table->unsignedBigInteger('user_id'); 
            $table->string('etiquetas', 20)->nullable();
            $table->string('slug', 30); 
            $table->unsignedBigInteger('estado_entrada_id'); 
            $table->integer('cantidad_visitas'); 
            $table->timestamps(); 

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foro_entradas');
    }
};
