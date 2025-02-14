<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('comentarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_articulo_id')->constrained('blog_articulos');
            $table->foreignId('user_id')->constrained('users');
            $table->text('mensaje');
            $table->timestamps(); // Incluye created_at y modified_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('comentarios');
    }
};
