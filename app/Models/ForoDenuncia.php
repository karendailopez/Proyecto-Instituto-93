<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ForoDenuncia extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'foro_entrada_id',
        'foro_comentario_id',
        'motivo'
    ];
    public function foroentrada() : BelongsTo
    {
        return $this->belongsTo(ForoEntrada::class, 'id');
    }
    public function forocomentario() : BelongsTo
    {
        return $this->belongsTo(ForoComentario::class, 'id');
    }
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, 'id');
    }
}