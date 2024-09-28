<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Personal extends Model
{
    use HasFactory;
    protected $table = 'personal';
    protected $fillable = [
        'numeroDocumento',
        'nombre',
        'apellido',
        'fechaNacimiento',
        'sexo',
        'direccion',
        'piso',
        'departamento',
        'localidad',
        'celular',
        'telefono',
        'nacionalidad',
        'email',
        'estadoCivil',
        'foto',
        'titulo',
        'tramoPedagogico',
        'fechaAlta',
        'fechaBaja',
        'personalEstado',
        'created_at',
        'modified_at'
    ];

    public function personal_estado() : BelongsTo
    {
        return $this->belongsTo(PersonalEstado::class, 'personalEstado');
    }

    public static function getPersonal($options): Builder
    {
        $query = self::query()
            ->select('personal.*')
            ->with('personal_estado'); // Cambié 'personal_estados' a 'personal_estado'
      
        if (isset($options['search'])) {
            $search = $options['search'];

            $query = $query->where(function (Builder $qSearch) use ($search) {
                return $qSearch->where('nombre', 'like', "%$search%")
                    ->orWhere('apellido', 'like', "%$search%")
                    ->orWhere('numeroDocumento', 'like', "%$search%")
                    ->orWhereHas('personal_estado', function (Builder $qEC) use ($search) {
                        return $qEC->where('descripcion', 'like', "%$search%");
                    });
            });
        }
        if(isset($options['order'])) {
            $order = $options['order'];
            $direction = $options['direction'] ?? 'asc';

            if($order === 'estado') {
                $query = $query
                    ->leftJoin('personalEstado', 'personal.personalEstado', '=', 'personalEstado.id')
                    ->orderBy('personalEstado.descripcion', $direction);
            } else {
                $query = $query->orderBy($order, $direction);
            }
        }
       
        return $query;
    }
}
