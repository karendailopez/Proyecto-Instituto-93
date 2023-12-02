<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CicloLectivo extends Model
{
    use HasFactory;

    protected $fillable = [
        'anio_lectivo',
        'cantidad_semana',
        'fecha_inicio',
        'fecha_cierre',
        'fecha_inscripcion_inicio',
        'fecha_inscripcion_cierre',
        'fecha_marzo_inicio',
        'fecha_marzo_cierre',
        'fecha_junio_inicio',
        'fecha_junio_cierre',
        'fecha_diciembre_inicio',
        'fecha_diciembre_cierre',
        'fecha_especial_inicio',
        'fecha_especial_cierre',
    ];

    public static function getUltimoCicloLectivo() {
        return self::query()
            ->orderByDesc('anio_lectivo')
            ->first();
    }
}
