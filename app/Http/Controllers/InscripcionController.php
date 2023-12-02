<?php

namespace App\Http\Controllers;

use App\Core\Functions;
use App\Models\Alumno;
use App\Models\AlumnoCarrera;
use App\Models\AlumnoDatoExtra;
use App\Models\Carrera;
use App\Models\CicloLectivo;
use App\Models\Provincia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InscripcionController
{
    public function carrera() {
        $carreras = Carrera::getCarreras();
        $provincias = Provincia::getProvincias();

        return view('InscripcionCarrera', compact('carreras', 'provincias'));
    }

    public function materia() {
        $carreras = Carrera::getCarreras();
        $provincias = Provincia::getProvincias();

        return Inertia::render('Inscripcion/Carrera', compact('carreras', 'provincias'));
    }

    public function store(Request $request) {
        $file = $request->file('comprobante_cooperadora');
        $comprobante = null;

        if($file && $file->isValid()) {
            $extension = $file->extension();
            $name = Functions::uniqidReal(32) . '.' . $extension;

            $file->move(storage_path('app/public/comprobantes'), $name);

            $comprobante = '/comprobantes/' . $name;
        }

        $data = $request->all();
        $alumno = new Alumno($data);
        $alumno->active = true;
        $alumno->comprobante_url = $comprobante;

        if($alumno->save()) {
            $ciclo_lectivo = CicloLectivo::getUltimoCicloLectivo();

            foreach ($data['alumno_dato_extras'] as $item) {
                $dato_extra = new AlumnoDatoExtra($item);
                if(isset($dato_extra->value)) {
                    $dato_extra->save();
                }
            }

            $alumno_carrera = new AlumnoCarrera([
                'carrera_id' => $data['carrera_id'],
                'alumno_id' => $alumno->id,
                'ciclo_lectivo_id' => $ciclo_lectivo->id,
                'inicializado' => false,
                'active' => true,
            ]);

            $alumno_carrera->save();
        } else {
            unlink(storage_path('app/public') . $comprobante);
        }

        return to_route('welcome')->with('status', 'Alumnos registrado correctamente');
    }
}
