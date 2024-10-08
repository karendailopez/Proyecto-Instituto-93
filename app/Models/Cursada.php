<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cursada extends Model
{
    use HasFactory;

    protected $fillable = [
        'curso_materia_id',
        'ciclo_lectivo_id',
        'cantidad_alumnos',
        'cantidad_alumnos_recursantes',
        'cantidad_alumnos_desertores',
        'hora_catedra',
        'fecha_asistencia',
        'porcentaje_asistencia',
    ];


    public function cursoMateria() : BelongsTo
    {
        return $this->belongsTo(CursoMateria::class, 'id');
    }
    public function cursoLectivo() : BelongsTo
    {
        return $this->belongsTo(CicloLectivo::class, 'id');
    }
}