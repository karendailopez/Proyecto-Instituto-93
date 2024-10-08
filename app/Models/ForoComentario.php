<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ForoComentario extends Model
{
    use HasFactory;

    protected $fillable = [
        'texto_html',
        'user_id',
        'foro_entrada_id',
        'foro_comentario_id',
        'estado_comentario_id'
    ];
    public function foroentrada() : BelongsTo
    {
        return $this->belongsTo(ForoEntrada::class, 'id');
    }
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, 'id');
    }
}