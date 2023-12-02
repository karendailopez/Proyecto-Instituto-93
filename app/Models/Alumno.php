<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    use HasFactory;

    protected $fillable = [
        'apellido',
        'nombre',
        'tipo_documento',
        'numero_documento',
        'estado_civil',
        'sexo',
        'fecha_nacimiento',
        'localidad_nacimiento',
        'pais_nacimiento',
        'domicilio_calle',
        'domicilio_altura',
        'domicilio_piso',
        'domicilio_departamento',
        'domicilio_provincia_id',
        'domicilio_distrito',
        'domicilio_localidad_id',
        'domicilio_codigo_postal',
        'telefono',
        'celular',
        'email',
        'titulo_secundario',
        'adeuda_materias',
        'adeuda_descripcion',
        'titulo',
        'orientacion',
        'otorgado_por',
        'anio_egreso',
        'promedio',
        'titulo_tramite',
        'mayor_titulo',
        'mayor_titulo_descripcion',
        'mayor_titulo_institucion',
        'mayor_titulo_promedio',
        'fotocopia_titulo',
        'constancia_titulo_tramite',
        'constancia_adeuda_materias',
        'cantidad_adeuda_materias',
        'certificado_aptitud',
        'fotocopia_documento',
        'foto_carnet',
        'fotocopia_partida_nacimiento',
        'vacuna_antihepatitis',
        'vacuna_antitetanica',
        'recibo',
        'monto',
        'foto_url',
        'active',
    ];
}
