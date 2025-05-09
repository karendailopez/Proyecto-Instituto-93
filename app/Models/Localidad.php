<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Localidad extends Model
{
    use HasFactory;

    protected $table = 'localidades';

    protected $fillable = [
        'provincia_id',
        'descripcion',
    ];

    public static function getLocalidades($provincia_id) {
        return self::query()
            ->where(['provincia_id' => $provincia_id])
            ->get();
    }

    public static function getDropdown($provincia_id) {
        return self::query()
            ->select(['id as value', 'descripcion as label'])
            ->where(['provincia_id' => $provincia_id])
            ->get();
    }
}
