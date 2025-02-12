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

    // Relación correcta con ForoEntrada
    public function foroentrada(): BelongsTo
    {
        return $this->belongsTo(ForoEntrada::class, 'foro_entrada_id');
    }

    // Relación correcta con User
    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Un comentario puede tener muchos votos
    public function votos()
    {
        return $this->hasMany(ForoVoto::class);
    }

    // Un comentario puede tener respuestas (otros comentarios)
    public function comentarios()
    {
        return $this->hasMany(ForoComentario::class, 'foro_comentario_id');
    }
}
