<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class CursadaEstado extends Model
{
    use HasFactory;
    protected $table = 'cursada_estados';
    protected $fillable = [
        'descripcion'
    ];

}