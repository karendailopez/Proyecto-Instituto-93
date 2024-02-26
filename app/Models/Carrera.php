<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Carrera extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'nombre',
        'descripcion_corta',
        'jefe_catedra',
        'anio_inicio',
        'anio_fin',
        'archivo_plan_studio',
        'archivo_correlatividades',
        'imagen_descriptiva',
        'numero_expediente',
        'numero_resolucion',
        'numero_institucion',
        'cantidad_horas',
        'duracion',
        'carrera_estado_id',
        'mostrar_inscripcion',
    ];

    public function carrera_estado() : BelongsTo
    {
        return $this->belongsTo(CarreraEstado::class, 'carrera_estado_id');
    }

    public static function getCarreras($options)
    {
        $query = self::query()
            ->select('carreras.*')
            ->with('carrera_estado');

        if(isset($options['search'])) {
            $search = $options['search'];

            $query = $query->where(function (Builder $qSearch) use ($search) {
                return $qSearch->where( 'nombre', 'like', "%$search%")
                    ->orWhere('titulo', 'like', "%$search%")
                    ->orWhere('descripcion_corta', 'like', "%$search%")
                    ->orWhere('jefe_catedra', 'like', "%$search%")
                    ->orWhereHas('carrera_estado', function (Builder $qEC) use($search) {
                        return $qEC->where('descripcion', 'like', "%$search%");
                    });
            });
        }

        if(isset($options['order'])) {
            $order = $options['order'];
            $direction = $options['direction'] ?? 'asc';

            if($order === 'estado') {
                $query = $query
                    ->leftJoin('carrera_estados', 'carreras.carrera_estado_id', '=', 'carrera_estados.id')
                    ->orderBy('carrera_estados.descripcion', $direction);
            } else {
                $query = $query->orderBy($order, $direction);
            }
        }

        return $query;
    }

    public static function getDropdown() {
        return self::query()
            ->where(['active' => true, 'mostrar_inscripcion' => true])
            ->get();
    }
}
