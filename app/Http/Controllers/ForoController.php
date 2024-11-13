<?php

namespace App\Http\Controllers;

use App\Models\ForoEntrada;
use App\Models\ForoVoto;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ForoController
{
    public function index() {
        $entradas = ForoEntrada::with(['comentarios', 'votos', 'denuncias'])->get();
        
        return Inertia::render('Foro/Index', ['entradas' => $entradas]);
    }
    /*

    public function show($slug) {
        $entrada = ForoEntrada::with(['comentarios', 'votos', 'denuncias'])
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('Foro/Entrada', ['entrada' => $entrada]);
    }*/

    public function store(Request $request) {
        // Validar los datos
        $validatedData = $request->validate([
            'titulo' => 'required|string|max:255',
            'texto_html' => 'required',
            'etiquetas' => 'array',
        ]);
    
        // Crear la nueva entrada
        $entrada = ForoEntrada::create([
            'user_id' => auth()->id(),
            'titulo' => $validatedData['titulo'],
            'texto_html' => $validatedData['texto_html'],
            'etiquetas' => json_encode($validatedData['etiquetas']), // Guardamos como JSON
            'estado' => 'activo', // Un ejemplo del estado por defecto
        ]);
    
        // Redirigir o responder
        return redirect()->route('foro.index');
    }

    public function votar(Request $request)
    {
        // Preparar los datos del voto
        $voteData = [
            'user_id' => $request->user_id,
            'foro_entrada_id' => $request->foro_entrada_id
        ];

        dd($request);
        // Caso de entrada
        $vote = ForoVoto::where('foro_comentario_id', $request->foro_comentario_id)
        ->where('user_id', $request->user_id)
        ->where('foro_entrada_id', $request->foro_entrada_id)
        ->first();

        dd($vote);

        if ($vote) {
        $vote->delete();
        }
        else
        {
            // Crear el voto para la entrada
            ForoVoto::create($voteData);
        }
    }
    public function crearEntrada()
    {
        
        return Inertia::render('Foro/crearEntrada');
    }
    public function insertarEntrada(Request $request)
    {
        // Crear una nueva entrada
        $entrada = new ForoEntrada();
        $entrada->titulo = $request->titulo;
        $entrada->slug = Str::slug($request->titulo); // Genera el slug a partir del título
        $entrada->texto_html = $request->texto_html;
        $entrada->user_id = $request->user_id;
        $entrada->etiquetas = json_encode($request->etiquetas);//gurado las etiquetas en gformato JSON
        $entrada->estado_entrada_id = $request->estado_entrada_id;
        $entrada->cantidad_visitas = $request->cantidad_visitas;
        $entrada->save();
       
    }
    
    
}