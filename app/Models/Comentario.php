<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    use HasFactory;

    protected $table = 'comentarios';

    protected $fillable = [
        'blog_articulo_id',
        'user_id',
        'mensaje',
    ];

    public function articulo()
    {
        return $this->belongsTo(BlogArticulo::class, 'blog_articulo_id');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    

}