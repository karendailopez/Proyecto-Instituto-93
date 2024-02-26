<?php

namespace App\Http\Controllers\Admin;

use App\Models\Alumno;
use App\Models\Provincia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlumnosController
{
    public function index(Request $request)
    {
        $options = [
            'search' => $request->search,
            'order' => $request->order,
            'direction' => $request->direction,
        ];

        $options['alumnos'] = Alumno::getAlumnos($options)->paginate($request->limit ?? 15);

        return Inertia::render('Admin/Alumnos/Index', $options);
    }

    public function edit($id)
    {
        $alumno = Alumno::getAlumno( $id );

        $provincias = Provincia::getDropdown();

        return Inertia::render('Admin/Alumnos/Edit', compact('alumno', 'provincias'));
    }
}
