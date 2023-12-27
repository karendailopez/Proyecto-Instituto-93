<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;

class Alumno extends Model
{
    use HasFactory;

    protected $fillable = [
        'apellido',
        'nombre',
        'tipo_documento',
        'numero_documento',
        'estado_civil',
        'sexo',
        'fecha_nacimiento',
        'localidad_nacimiento',
        'pais_nacimiento',
        'domicilio_calle',
        'domicilio_altura',
        'domicilio_piso',
        'domicilio_departamento',
        'domicilio_provincia_id',
        'domicilio_distrito',
        'domicilio_localidad_id',
        'domicilio_codigo_postal',
        'telefono',
        'celular',
        'email',
        'titulo_secundario',
        'adeuda_materias',
        'adeuda_descripcion',
        'titulo',
        'orientacion',
        'otorgado_por',
        'anio_egreso',
        'promedio',
        'titulo_tramite',
        'mayor_titulo',
        'mayor_titulo_descripcion',
        'mayor_titulo_institucion',
        'mayor_titulo_promedio',
        'fotocopia_titulo',
        'constancia_titulo_tramite',
        'constancia_adeuda_materias',
        'cantidad_adeuda_materias',
        'certificado_aptitud',
        'fotocopia_documento',
        'foto_carnet',
        'fotocopia_partida_nacimiento',
        'vacuna_antihepatitis',
        'vacuna_antitetanica',
        'recibo',
        'monto',
        'comprobante_url',
        'email_encriptado',
        'email_verificado',
        'foto_url',
        'active',
    ];

    // RELATIONS
    public function alumno_carreras() : HasMany
    {
        return $this->hasMany( AlumnoCarrera::class, 'alumno_id' );
    }

    // QUERIES
    public static function getAlumnoPorEmail(string $email) {
        return self::query()
            ->where(['email_encriptado' => $email])
            ->first();
    }

    public static function getAlumnos($options)
    {
        $query = self::query()
            ->select('alumnos.*')
            ->with('alumno_carreras.carrera');

        if(isset($options['search'])) {
            $search = $options['search'];

            $query = $query->where(function (Builder $qSearch) use ($search) {
                return $qSearch->where( 'apellido', 'like', "%$search%")
                    ->orWhere('alumnos.nombre', 'like', "%$search%")
                    ->orWhere('alumnos.email', 'like', "%$search%")
                    ->orWhere('alumnos.numero_documento', 'like', "%$search%")
                    ->orWhereHas('alumno_carreras', function (Builder $qCA) use($search) {
                        return $qCA->whereHas('carrera', function (Builder $qC) use($search) {
                           return $qC->where('nombre', 'like', "%$search%");
                        });
                    });
            });
        }

        if(isset($options['order'])) {
            $order = $options['order'];
            $direction = $options['direction'] ?? 'asc';

            if($order === 'carrera') {
                $query = $query
                    ->leftJoin('alumno_carreras', 'alumnos.id', '=', 'alumno_carreras.alumno_id')
                    ->leftJoin('carreras', 'alumno_carreras.carrera_id', '=', 'carreras.id')
                    ->orderBy('carreras.nombre', $direction);
            } else {
                $query = $query->orderBy($order, $direction);
            }
        }

        return $query;
    }
}
