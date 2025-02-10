<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
class BlogGrupo extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'slug',
        'portada_baja_url',
        'portada_alta_url',
    ];

    public function categorias(): HasMany
    {
        return $this->hasMany(BlogCategoria::class, 'blog_grupo_id');
    }
}