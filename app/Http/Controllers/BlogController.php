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
        $articulos = BlogArticulo::where('blog_categoria_id', $grupos[0]->categorias[0]->id)
                ->get();

        return Inertia::render('Blog/Index', ['grupos' => $grupos, 'articulos'=> $articulos,]);
    }
}
