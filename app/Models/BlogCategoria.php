<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class BlogCategoria extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'slug',
        'blog_grupo_id',
        'portada_baja_url',
        'portada_alta_url',
    ];

    public function grupo() : BelongsTo
    {
        return $this->belongsTo( BlogGrupo::class, 'blog_grupo_id' );
    }
}