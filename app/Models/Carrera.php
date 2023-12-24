<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrera extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'nombre',
        'descripcion_corta',
        'jefe_catedra',
        'anio_inicio',
        'anio_fin',
        'archivo_plan_studio',
        'archivo_correlatividades',
        'imagen_descriptiva',
        'numero_expediente',
        'numero_resolucion',
        'numero_institucion',
        'cantidad_horas',
        'duracion',
        'carrera_estado_id',
        'active',
        'mostrar_inscripcion',
    ];

    public static function getCarreras() {
        return self::query()
            ->where(['active' => true, 'mostrar_inscripcion' => true])
            ->get();
    }
}
