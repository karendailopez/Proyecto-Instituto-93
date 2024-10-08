<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CursoMateria extends Model
{
    use HasFactory;

    protected $fillable = [
        'materia_id',
        'curso_id',
        'fecha_baja',
        'active',
    ];
    public function cursoid() : BelongsTo
    {
        return $this->belongsTo(Curso::class, 'id');
    }
}