<?php

namespace App\Http\Controllers\Admin;

use App\Models\Alumno;
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
}
