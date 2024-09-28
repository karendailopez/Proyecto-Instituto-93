<?php

namespace App\Http\Controllers\Alumnos;

use App\Models\Mesa;
use App\Models\MesaAlumno;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MesasController
{
    public function index(Request $request)
    {
        $options = [
            'search' => $request->search,
            'order' => $request->order,
            'direction' => $request->direction,
        ];
        
       // $options['mesas'] = Mesa::getMesas($options)->paginate($request->limit ?? 15);
        
        return Inertia::render('Alumnos/Mesas/Index', $options);
    }

    public function inscribir(Request $request)
    {
        $idMesa = $request->mesas;
        $idAlumno = $request->alumno_id;

        foreach ($idMesa as $mesaId) {
            MesaAlumno::create([
                'mesa_id' => $mesaId,
                'alumno_carrera_id' => $idAlumno,
                'mesa_alumno_estado_id' => 1,
            ]);
        }

        return redirect()->route('alumnos.mesas.index');
    }

    public function desinscribir(Request $request)
    {
        MesaAlumno::where('alumno_carrera_id', $request->alumno_id)
        ->whereIn('mesa_id', $request->mesas)
        ->delete();

        return redirect()->route('alumnos.mesas.index');
    }
}