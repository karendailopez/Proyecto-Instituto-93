<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provincia extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
    ];

    public static function getProvincias() {
        return self::query()
            ->get();
    }

    public static function getDropdown() {
        return self::query()
            ->select(['id as value', 'descripcion as label'])
            ->get();
    }
}
