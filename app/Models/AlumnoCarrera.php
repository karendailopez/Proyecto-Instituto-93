<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function carrera() : BelongsTo
    {
        return $this->belongsTo( Carrera::class, 'carrera_id' );
    }
    // public function alumnoid() : BelongsTo
    // {
    //     return $this->belongsTo(Alumno )
    // }
}
