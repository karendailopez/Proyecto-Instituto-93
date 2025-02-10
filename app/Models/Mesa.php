<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Mesa extends Model
{
    use HasFactory;

    protected $fillable = [
        'curso_materia_id',
        'fecha_hora_1',
        'fecha_hora_2',
        'personal_presidente_id',
        'personal_auxiliar_id',
        'libro',
        'folio',
        'total_alumnos',
        'total_ausentes',
        'total_aprobados',
        'total_aplazados',
    ];

    public function cursoMateria()
    {
        return $this->belongsTo(CursoMateria::class);
    }

    public function materia()
    {
        return $this->hasOneThrough(Materia::class, CursoMateria::class, 'id', 'id', 'curso_materia_id', 'materia_id');
    }

    public function curso()
    {
        return $this->hasOneThrough(Curso::class, CursoMateria::class, 'id', 'id', 'curso_materia_id', 'curso_id');
    }

    public function personalPresidente()
    {
        return $this->belongsTo(Personal::class, 'personal_presidente_id');
    }
    public function personalAuxiliar()
    {
        return $this->belongsTo(Personal::class, 'personal_auxiliar_id');
    }
    public function mesaAlumnos()
    {
        return $this->hasMany(MesaAlumno::class);
    }

    public static function getMesasPersonal($options)
    {
        $query = self::query()
            ->select('mesas.*')
            ->with('cursoMateria', 'materia', 'curso', 'personalPresidente', 'personalAuxiliar');

        // Filtro de búsqueda
        if (isset($options['search']) && !empty($options['search'])) {
            $search = $options['search'];

            $query = $query->where(function (Builder $qSearch) use ($search) {
                return $qSearch->whereHas('cursoMateria', function (Builder $qCM) use ($search) {
                        $qCM->where('nombre', 'like', "%$search%");
                    })
                    ->orWhereHas('materia', function (Builder $qM) use ($search) {
                        $qM->where('nombre', 'like', "%$search%");
                    })
                    ->orWhereHas('curso', function (Builder $qC) use ($search) {
                        $qC->where('nombre', 'like', "%$search%"); 
                    })
                    ->orWhereHas('personalPresidente', function (Builder $qPP) use ($search) {
                        $qPP->where('nombre', 'like', "%$search%")
                            ->orWhere('apellido', 'like', "%$search%");
                    })
                    ->orWhereHas('personalAuxiliar', function (Builder $qPA) use ($search) {
                        $qPA->where('nombre', 'like', "%$search%") 
                            ->orWhere('apellido', 'like', "%$search%");
                    });
            });
        }

        // Retornar la consulta para poder paginar más tarde
        return $query;
    }



    public static function getMesas($options)
    {
        $query = self::query()
            ->select('mesas.*')
            ->with('cursoMateria', 'materia', 'curso', 'personalPresidente', 'personalAuxiliar');

        // Filtro de búsqueda
        if (isset($options['search'])) {
            $search = $options['search'];

            $query = $query->where(function (Builder $qSearch) use ($search) {
                return $qSearch->whereHas('cursoMateria', function (Builder $qCM) use ($search) {
                        $qCM->where('nombre', 'like', "%$search%");
                    })
                    ->orWhereHas('materia', function (Builder $qM) use ($search) {
                        $qM->where('nombre', 'like', "%$search%");
                    })
                    ->orWhereHas('curso', function (Builder $qC) use ($search) {
                        $qC->where('nombre', 'like', "%$search%");
                    })
                    ->orWhereHas('personalPresidente', function (Builder $qPP) use ($search) {
                        $qPP->where('nombre', 'like', "%$search%")
                            ->orWhere('apellido', 'like', "%$search%");
                    })
                    ->orWhereHas('personalAuxiliar', function (Builder $qPA) use ($search) {
                        $qPA->where('nombre', 'like', "%$search%")
                            ->orWhere('apellido', 'like', "%$search%");
                    });
            });
        }

        
        return $query;
    }

    
}