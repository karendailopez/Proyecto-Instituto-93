<?php

namespace App\Http\Controllers\Admin;

use App\Core\Constants\EstadoCarrera;
use App\Http\Requests\Admin\CarreraRequest;
use App\Models\Carrera;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CarrerasController
{
    public function index(Request $request)
    {
        $options = [
            'search' => $request->search,
            'order' => $request->order,
            'direction' => $request->direction,
        ];

        $options['carreras'] = Carrera::getCarreras($options)->paginate($request->limit ?? 15);

        return Inertia::render('Admin/Carreras/Index', $options);
    }

    public function edit($id)
    {
        $carrera = Carrera::find($id);

        return Inertia::render('Admin/Carreras/Edit', compact('carrera'));
    }

    public function update(CarreraRequest $request) : RedirectResponse
    {
        $carrera = Carrera::find($request->id);

        $carrera->fill( $request->validated() );

        $carrera->save();

        return Redirect::route('admin.carreras.index');
    }

    public function estado(Request $request) : RedirectResponse
    {
        $carrera = Carrera::find($request->id);

        $carrera->carrera_estado_id = $request->carrera_estado_id;

        $carrera->save();

        return Redirect::route('admin.carreras.index');
    }
}
