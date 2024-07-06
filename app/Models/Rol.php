<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rol extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'roles';

    protected $fillable = [
        'tipo_usuario_id',
        'descripcion',
    ];

    public function tipo_usuario() : BelongsTo
    {
        return $this->belongsTo( TipoUsuario::class, 'tipo_usuario_id' );
    }

    public static function getDropdown($tipo_usuario_id)
    {
        return self::query()
                ->where(['tipo_usuario_id' => $tipo_usuario_id])
                ->select(['id as value', 'descripcion as label'])
                ->get();
    }

    public static function getRol($rol_id) {
        return self::find($rol_id);
    }
}
