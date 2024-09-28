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
        'personal_auxiliar',
        'libro',
        'folio',
        'total_alumnos',
        'total_ausentes',
        'total_aprobados',
        'total_aplazados'
        
    ];
}
