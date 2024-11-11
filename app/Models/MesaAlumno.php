<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MesaAlumno extends Model
{
    use HasFactory;
    protected $table = 'mesa_alumnos';
    protected $fillable = [
        'mesa_id',
        'alumno_carrera_id',
        'cursada_alumno_id',
        'mesa_alumno_estado_id',
        'nota_numerica',
        'nota_letras'
        
    ];

    public function mesas() :BelongsTo
    {
        return $this->belongsTo(Mesa::class, 'mesa_id');
    }
    public function alumno_carrera() :BelongsTo
    {
        return $this->belongsTo(AlumnoCarrera::class, 'alumno_carrera_id');
    }
    public function mesa_alumnos_estados() :BelongsTo
    {
        return $this->belongsTo(MesaAlumnoEstado::class, 'id');
    }
}