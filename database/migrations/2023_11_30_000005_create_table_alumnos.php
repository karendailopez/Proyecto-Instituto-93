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
        Schema::create('alumnos', function (Blueprint $table) {
            $table->id();
            $table->string('apellido', 50);
            $table->string('nombre', 50);
            $table->string('tipo_documento', 10);
            $table->string('numero_documento', 10);
            $table->string('estado_civil', 15)->nullable();
            $table->char('sexo', 1);
            $table->dateTime('fecha_nacimiento');
            $table->string('localidad_nacimiento', 50)->nullable();
            $table->string('pais_nacimiento', 50)->nullable();
            $table->string('domicilio_calle', 255)->nullable();
            $table->string('domicilio_altura', 10)->nullable();
            $table->string('domicilio_piso', 10)->nullable();
            $table->string('domicilio_departamento', 10)->nullable();
            $table->unsignedBigInteger('domicilio_provincia_id')->nullable();
            $table->string('domicilio_distrito', 50)->nullable();
            $table->unsignedBigInteger('domicilio_localidad_id')->nullable();
            $table->string('domicilio_codigo_postal', 10)->nullable();
            $table->string('telefono', 30)->nullable();
            $table->string('celular', 30)->nullable();
            $table->string('email', 255)->nullable();
            $table->boolean('titulo_secundario')->nullable();
            $table->integer('adeuda_materias')->nullable();
            $table->string('adeuda_descripcion', 150)->nullable();
            $table->string('titulo', 150)->nullable();
            $table->string('orientacion', 50)->nullable();
            $table->string('otorgado_por', 50)->nullable();
            $table->integer('anio_egreso', 50)->nullable();
            $table->decimal('promedio', 18)->nullable();
            $table->boolean('titulo_tramite')->nullable();
            $table->string('mayor_titulo', 50)->nullable();
            $table->string('mayor_titulo_descripcion', 150)->nullable();
            $table->string('mayor_titulo_institucion', 150)->nullable();
            $table->decimal('mayor_titulo_promedio', 18)->nullable();
            $table->boolean('fotocopia_titulo')->nullable();
            $table->boolean('constancia_titulo_tramite')->nullable();
            $table->boolean('constancia_adeuda_materias')->nullable();
            $table->integer('cantidad_adeuda_materias')->nullable();
            $table->boolean('certificado_aptitud')->nullable();
            $table->boolean('fotocopia_documento')->nullable();
            $table->boolean('foto_carnet')->nullable();
            $table->boolean('fotocopia_partida_nacimiento')->nullable();
            $table->boolean('vacuna_antihepatitis')->nullable();
            $table->boolean('vacuna_antitetanica')->nullable();
            $table->integer('recibo')->nullable();
            $table->decimal('monto', 18)->nullable();
            $table->string('foto_url', 255)->nullable();
            $table->string('comprobante_url', 255)->nullable();
            $table->boolean('active')->nullable();
            $table->timestamps();

            $table->foreign('domicilio_provincia_id')->references('id')->on('provincias')->onDelete('SET NULL');
            $table->foreign('domicilio_localidad_id')->references('id')->on('localidades')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumnos');
    }
};
