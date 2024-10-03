<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CarreraAnio extends Model
{
    use HasFactory;

    protected $fillable = [
        'carrera_anio',
        'cantidad_materias',
        'cargar_horaria_completa',
        'carrera_id'
    ];

    public function carreraid() : BelongsTo
    {
        return $this->belongsTo(Carrera::class, 'id');
    }
}