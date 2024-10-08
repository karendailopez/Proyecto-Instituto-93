<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mesa extends Model
{
    use HasFactory;

    protected $fillable = [
        'curso_materia_id',
        'fecha_hora_1',
        'fecha_hora_2',
        'personal_presidente_id',
        'personal_auxiliar_id',
        'libro',
        'folio',
        'total_alumnos',
        'total_ausentes',
        'total_aprobados',
        'total_aplazados',
    ];

    public function cursoMateria()
    {
        return $this->belongsTo(CursoMateria::class);
    }

    public function materia()
    {
        return $this->hasOneThrough(Materia::class, CursoMateria::class, 'id', 'id', 'curso_materia_id', 'materia_id');
    }

    public function curso()
    {
        return $this->hasOneThrough(Curso::class, CursoMateria::class, 'id', 'id', 'curso_materia_id', 'curso_id');
    }

    public function personalPresidente()
    {
        return $this->belongsTo(Personal::class, 'personal_presidente_id');
    }
    public function personalAuxiliar()
    {
        return $this->belongsTo(Personal::class, 'personal_auxiliar_id');
    }
    public function mesaAlumnos()
    {
        return $this->hasMany(MesaAlumno::class);
    }
}