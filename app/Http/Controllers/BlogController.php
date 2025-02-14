<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\BlogGrupo;
use App\Models\BlogArticulo;

class BlogController
{
    public function index(){
        $grupos = BlogGrupo::with(['categorias'])
            ->get();
        
        //Traemos las articulos de cada categoria (Por ahora solo de una categoria)
        $articulos = BlogArticulo::get();

        return Inertia::render('Blog/Index', ['grupos' => $grupos, 'articulos'=> $articulos,]);
    }
    public function articulos($idArticulo){
        $entrada = BlogArticulo::with([
            'comentarios.usuario'
        ])
        ->where('id', $idArticulo)
        ->firstOrFail();

        return Inertia::render('Blog/Articulos', ['entrada' => $entrada]);
        
    }
}
