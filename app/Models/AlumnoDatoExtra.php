<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AlumnoDatoExtra extends Model
{
    use HasFactory;

    protected $fillable = [
        'alumno_id',
        'campo',
        'valor',
    ];
}
