<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MesaAlumnoEstado extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'descripcion'
        
    ];
    public function mesaAlumnos()
    {
        return $this->hasMany(MesaAlumno::class);
    }
}