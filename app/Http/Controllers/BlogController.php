<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\BlogGrupo;
use App\Models\BlogArticulo;
use App\Models\Comentario;
use App\Models\BlogCategoria;
use App\Models\BlogVoto;
use App\Models\BlogTemaRelacionado;

class BlogController
{
    public function index(){
        $grupos = BlogGrupo::with(['categorias'])->get();
        // Traer solo los últimos 4 artículos creados
        $articuloss = BlogArticulo::latest()->take(4)->get()->toArray();
        $ultimoArticulo = $articuloss[0] ?? null; // Primer artículo
        $otrosArticulos = array_slice($articuloss, 1, 3); // Los otros 3 artículos
       
        // Obtener 3 artículos de Sistemas (ID 1)
        $sistemas = BlogArticulo::join('blog_categorias', 'blog_articulos.blog_categoria_id', '=', 'blog_categorias.id')
        ->join('blog_grupos', 'blog_categorias.blog_grupo_id', '=', 'blog_grupos.id')
        ->where('blog_grupos.id', 1)
        ->select('blog_articulos.*', 'blog_categorias.descripcion as subcategoria_nombre', 'blog_grupos.descripcion as categoria_nombre')
        ->orderBy('blog_articulos.created_at', 'desc')
        ->limit(3)
        ->get();

        // Obtener 3 artículos de Turismo (ID 2)
        $turismo = BlogArticulo::join('blog_categorias', 'blog_articulos.blog_categoria_id', '=', 'blog_categorias.id')
        ->join('blog_grupos', 'blog_categorias.blog_grupo_id', '=', 'blog_grupos.id')
        ->where('blog_grupos.id', 2)
        ->select('blog_articulos.*', 'blog_categorias.descripcion as subcategoria_nombre', 'blog_grupos.descripcion as categoria_nombre')
        ->orderBy('blog_articulos.created_at', 'desc')
        ->limit(3)
        ->get();

        // Combinar los resultados
        $articulos = $sistemas->merge($turismo);


        return Inertia::render('Blog/Index', [
            'grupos' => $grupos,
            'ultimoArticulo' => $ultimoArticulo,
            'otrosArticulos' => $otrosArticulos,
            'articulos' => $articulos
        ]);
    }
    public function articulos($idArticulo){
        $articulo = BlogArticulo::with([
            'comentarios.usuario',
            'user',
            'votos'
        ])
        ->where('id', $idArticulo)
        ->firstOrFail();

        $articulosRelacionados = null;

        if($articulo->temas_relacionados !=  null){
            $articulosRelacionados = BlogArticulo::where('id', '!=', $idArticulo)
            ->where(function ($query) use ($articulo) {
                foreach ($articulo->temas_relacionados as $tema) {
                    $query->orWhere('temas_relacionados', 'LIKE', '%"codigo": "'. $tema['codigo'] .'"%');
                }
            })
            ->limit(4)
            ->get();
        }

        return Inertia::render('Blog/Articulos', ['articulo' => $articulo,
                                                'articulosRelacionados' => $articulosRelacionados]);
        
        
    }
    public function insertarComentario(Request $request)
    {
        // Crear nuevo comentario
        $comment = Comentario::create([
            'mensaje' => $request->mensaje, // mensaje del comentario en HTML
            'user_id' =>  $request->user_id, // Usuario autenticado
            'blog_articulo_id' => $request->blog_articulo_id // ID del articulo
            
        ]);
    }
    public function categorias($idCategoria)
    {
        $portada = BlogCategoria::where('id', $idCategoria)->firstOrFail();
        $articulos = BlogArticulo::where('blog_categoria_id', $idCategoria)->get();
        return Inertia::render('Blog/Categorias', [
            'portada' => $portada,
            'articulos' => $articulos
        ]);
    }
    public function votar(Request $request, $idArticulo)
    {
        // Preparar los datos del voto
        $voteData = [
            'user_id' => $request->user_id,
            'blog_articulo_id' => $idArticulo
        ];

        // Caso de entrada
        $vote = BlogVoto::where('user_id', $request->user_id)
        ->where('blog_articulo_id', $idArticulo)
        ->first();

        if ($vote) {
            $vote->delete();
        }
        else
        {
            // Crear el voto para la entrada
            BlogVoto::create($voteData);
        }
    }
    public function tags(Request $request, $id)
    {
        
        $descripcion = $request->query('descripcion'); // Obtiene la descripción desde la URL

        // Buscamos el artículo original (aunque realmente no es necesario para la lógica)
        $articulo = BlogArticulo::findOrFail($id);
    
        // Buscar artículos relacionados por el código del tema seleccionado
        $articulosRelacionados = BlogArticulo::whereJsonContains('temas_relacionados', [['descripcion' => $descripcion]])
            ->where('id', '!=', $id)
            ->get();
    
        return Inertia::render('Blog/Tags', [
            'descripcion' => $descripcion,
            'articulosRelacionados' => $articulosRelacionados
        ]);
    }

   
   
}
