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
        Schema::create('foro_comentarios', function (Blueprint $table) {
            $table->id();
            $table->string('texto_html', 500); 
            $table->unsignedBigInteger('user_id'); 
            $table->unsignedBigInterger('foro_entrada_id');
            $table->unsignedBigInteger('foro_comentario_id'); 
            $table->unsignedBigInteger('estado_comentario_id'); 
            $table->timestamps();

            
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('foro_entrada_id')->references('id')->on('foro_entradas');
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foro_comentarios');
    }
};
