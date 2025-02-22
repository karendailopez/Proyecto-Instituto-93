<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlogArticulo extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'descripcion',
        'slug',
        'html',
        'portada_baja_url',
        'portada_alta_url',
        'user_id',
        'blog_categoria_id',
        'temas_relacionados',
        'created_at'
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo( User::class, 'user_id' );
    }
    
    public function categoria() : BelongsTo
    {
        return $this->belongsTo( BlogCategoria::class, 'blog_categoria_id' );
    }
   
    public function comentarios()
    {
        return $this->hasMany(Comentario::class);
    }
    public function votos() : BelongsTo
    {
        return $this->belongsTo( BlogVoto::class, 'blog_articulo_id' );
    }
}