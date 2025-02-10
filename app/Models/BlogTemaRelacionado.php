<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class BlogTemaRelacionado extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'codigo',
    ];
}