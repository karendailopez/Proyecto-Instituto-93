<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalEstado extends Model
{
    use HasFactory;
    protected $table = 'personal_estados';
    protected $fillable = [
        'descripcion'
    ];
}