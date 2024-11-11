<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\PersonalRequest;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Personal;
use Illuminate\Support\Facades\Redirect;
use App\Models\PersonalEstado;
use Inertia\Inertia; 

class PersonalController
{
    public function index(Request $request)
    {
        $options = [
            'search' => $request->search,
            'order' => $request->order,
            'direction' => $request->direction,
        ];
       

        $options['personal'] = Personal::getPersonal($options)->paginate($request->limit ?? 15);


        return Inertia::render('Admin/Personal/Index', $options);
    }
    public function create()
    {
        return Inertia::render('Admin/Personal/Create');
    }
    public function store(PersonalRequest $request) : RedirectResponse
    {
        Personal::create([
            'numeroDocumento' => $request->numeroDocumento,
            'nombre' => $request->nombre,
            'apellido' => $request->apellido,
            'fechaNacimiento' => $request->fechaNacimiento,
            'sexo' => $request->sexo,
            'direccion' => $request->direccion,
            'piso' => $request->piso,
            'departamento' => $request->departamento,
            'localidad' => $request->localidad,
            'celular' => $request->celular,
            'telefono' => $request->telefono,
            'nacionalidad' => $request->nacionalidad,
            'email' => $request->email,
            'estadoCivil' => $request->estadoCivil,
            'foto' => $request->foto,
            'titulo' => $request->titulo,
            'tramoPedagogico' => $request->tramoPedagogico,
            'fechaAlta' => $request->fechaAlta,
            'fechaBaja' => $request->fechaBaja, 
            
        ]);

        return Redirect::route('admin.personal.index');
    }
    public function edit($id)
    {
        $personal = Personal::find($id);

        return Inertia::render('Admin/Personal/Edit', compact('personal'));
    }
    public function update(PersonalRequest $request) : RedirectResponse
    {
        $personal = Personal::find($request->id);

        $personal->fill( $request->validated() );

        $personal->save();

        return Redirect::route('admin.personal.index');
    }
    public function estado(Request $request) : RedirectResponse
    {
        $personal = Personal::find($request->id);

        $personal->personalEstado = $request->personalEstado;

        $personal->save();

        return Redirect::route('admin.personal.index');
    }
}