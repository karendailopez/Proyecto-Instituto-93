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
        Schema::create('blog_grupos', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion', 256);
            $table->string('slug', 256);
            $table->string('portada_baja_url', 255)->nullable();
            $table->string('portada_alta_url', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_grupos');
    }
};
