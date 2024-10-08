<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Curso extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'carrera_anio_id',
        'active'
    ];

    public function carreraanio() : BelongsTo
    {
        return $this->belongsTo(CarreraAnio::class, 'id');
    }
}