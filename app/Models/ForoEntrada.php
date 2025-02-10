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
    public function usuario()
    {
        return $this->belongsTo(user::class, 'user_id');
    }
    public function comentarios() 
    {
        return $this->hasMany(ForoComentario::class, 'foro_entrada_id');
    }

    public function votos() 
    {
        return $this->hasMany(ForoVoto::class, 'foro_entrada_id');
    }

    public function denuncias() 
    {
        return $this->hasMany(ForoDenuncia::class, 'foro_entrada_id');
    }
}