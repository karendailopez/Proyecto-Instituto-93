<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class BlogImagene extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'path',
        'url',
        'user_id',
    ];
    
    public function user() : BelongsTo
    {
        return $this->belongsTo( User::class, 'user_id' );
    }
}