<?php

namespace App\Http\Controllers;

use App\Models\ForoEntrada;
use App\Models\ForoVoto;
use Inertia\Inertia;
use Illuminate\Http\Request;

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

    public function votar(Request $request, $id)
    {
        // Buscar la entrada por su ID
        $entrada = ForoEntrada::find($id);

        if ($entrada) {
            // Registrar el voto en la tabla foro_votos
            ForoVoto::create([
                'foro_entrada_id' => $entrada->id,
                'usuario_id' => auth()->id(),  // El ID del usuario que vota
            ]);

            // Contar los votos totales para la entrada
            $totalVotos = ForoVoto::where('foro_entrada_id', $entrada->id)->count();

            // Retornar la nueva cantidad de votos
            return response()->json(['total_votos' => $totalVotos], 200);
        } else {
            return response()->json(['error' => 'Entrada no encontrada'], 404);
        }
    }
    
}