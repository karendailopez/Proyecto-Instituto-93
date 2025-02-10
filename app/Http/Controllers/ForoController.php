<?php

namespace App\Http\Controllers;

use App\Models\ForoEntrada;
use App\Models\ForoVoto;
use App\Models\ForoComentario;
use App\Models\ForoDenuncia;
use App\Models\ForoEtiqueta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;

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

    public function votar(Request $request, $idEntrada)
    {
        // Preparar los datos del voto
        $voteData = [
            'user_id' => $request->user_id,
            'foro_entrada_id' => $idEntrada,
            'foro_comentario_id' => 1
        ];

        // Caso de entrada
        $vote = ForoVoto::where('user_id', $request->user_id)
        ->where('foro_entrada_id', $idEntrada)
        ->first();

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
    public function insertarComentario(Request $request)
    {
        // Crear nuevo comentario
        $comment = ForoComentario::create([
            'texto_html' => $request->texto_html, // Texto del comentario en HTML
            'user_id' =>  $request->user_id, // Usuario autenticado
            'foro_entrada_id' => $request->foro_entrada_id, // ID de la entrada
            'foro_comentario_id' => $request->foro_comentario_id, // ID del comentario padre (nulo si es comentario principal)
           'estado_comentario_id' => $request->estado_comentario_id
        ]);

               
       
    }
    public function entrada($idEntrada)
    {
        $entrada = ForoEntrada::with([
            'comentarios.usuario',
            'comentarios.votos',
            'comentarios.comentarios.votos'
        ])
        ->where('id', $idEntrada)
        ->firstOrFail();

        return Inertia::render('Foro/Entrada', ['entrada' => $entrada]);
    }
    
}