<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ForoEntrada extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'texto_html',
        'user_id',
        'etiquetas',
        'slug',
        'estado_entrada_id',
        'cantidad_visitas'
    ];
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, 'id');
    }
}