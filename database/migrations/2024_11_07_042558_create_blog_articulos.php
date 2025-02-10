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
        Schema::create('blog_articulos', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descripcion')->nullable();
            $table->string('slug');
            $table->string('html');
            $table->string('portada_baja_url', 255)->nullable();
            $table->string('portada_alta_url', 255)->nullable();
            $table->integer('user_id');
            $table->integer('blog_categoria_id');
            $table->json('temas_relacionados')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_articulos');
    }
};