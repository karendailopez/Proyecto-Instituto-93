<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CursadaAlumno extends Model
{
    use HasFactory;

    protected $fillable = [
        'alumno_carrera_id',
        'cursada_id',
        'ciclo_lectivo_id',
        'cursada_estado_id',
        'horas_cursadas',
        'ultimo_presentismo',
        'porcentaje_presentismo',
        'active',
    ];

    public function alumnoCarrera()
    {
        return $this->belongsTo(AlumnoCarrera::class, 'alumno_carrera_id');
    }

    public function cursada() 
    {
        return $this->belongsTo(Cursada::class, 'cursada_id');
    }

    public function cicloLectivo()
    {
        return $this->belongsTo(CicloLectivo::class, 'ciclo_lectivo_id');
    }

    public function cursadaestado() : BelongsTo
    {
        return $this->belongsTo(PersonalEstado::class, 'id');
    }

    public function mesaAlumnos()
    {
        return $this->hasMany(MesaAlumno::class, 'cursada_alumno_id');
    }
}