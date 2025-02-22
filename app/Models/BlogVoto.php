<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlogVoto extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'blog_articulo_id'
    ];
    public function blogarticulo() : BelongsTo
    {
        return $this->belongsTo(BlogArticulo::class, 'id');
    }
    
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, 'id');
    }
}