<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Materia extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'carrera_anio_id',
        'espacio_materia_id',
        'carga_horaria',
        'modulos',
        'active',
    ];
    public function carreraAnio() : BelongsTo
    {
        return $this->belongsTo(CarreraAnio::class, 'id');
    }
    public function espaciomateria() : BelongsTo
    {
        return $this->belongsTo(EspacioMateria::class, 'id');
    }
}