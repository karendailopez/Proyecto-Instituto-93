<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AlumnoCarrera extends Model
{
    use HasFactory;

    protected $fillable = [
        'carrera_id',
        'alumno_id',
        'ciclo_lectivo_id',
        'fecha_baja',
        'inicializado',
        'active',
    ];
}
