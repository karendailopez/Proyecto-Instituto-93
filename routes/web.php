<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SesionController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('welcome');

Route::get('/dashboard', function () { return Inertia::render('Dashboard');})
    ->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/inscripcion-carrera', [\App\Http\Controllers\InscripcionController::class, 'carrera'])->name('inscripcion-carrera');
Route::get('/inscripcion-materia', [\App\Http\Controllers\InscripcionController::class, 'materia'])->name('inscripcion-materia');

/*FORO*/
Route::get('/foro', [\App\Http\Controllers\ForoController::class, 'index'])->name('foro');
Route::post('/foro', [\App\Http\Controllers\ForoController::class, 'store']);
Route::get('/foro/crearEntrada', [\App\Http\Controllers\ForoController::class, 'crearEntrada'])->name('foro.crearEntrada');
Route::post('/foro/insertarEntrada',[App\Http\Controllers\ForoController::class,'insertarEntrada'])->name('foro.insertarEntrada');
Route::post('/foro/insertarComentario',[App\Http\Controllers\ForoController::class,'insertarComentario'])->name('foro.insertarComentario');
Route::post('/foro/votar/{idEntrada}',[App\Http\Controllers\ForoController::class,'votar'])->name('foro.votar');
Route::get('/foro/entrada/{idEntrada}', [App\Http\Controllers\ForoController::class, 'entrada'])->name('foro.entrada');
Route::post('/foro/votarComent/{idComentario}',[App\Http\Controllers\ForoController::class,'votarComent'])->name('foro.votarComent');
Route::post('/foro/denunciar', [App\Http\Controllers\ForoController::class, 'denunciar'])->name('foro.denunciar');

/*BLOG*/
Route::get('/blog', [\App\Http\Controllers\BlogController::class, 'index'])->name('blog');
Route::get('/blog/articulo/{idArticulo}', [\App\Http\Controllers\BlogController::class, 'articulos'])->name('blog.articulos');
Route::post('/blog/insertarComentario',[App\Http\Controllers\BlogController::class,'insertarComentario'])->name('blog.insertarComentario');
Route::get('/blog/categorias/{idCategoria}', [\App\Http\Controllers\BlogController::class, 'categorias'])->name('blog.categorias');
Route::post('/blog/votar/{idArticulo}',[App\Http\Controllers\BlogController::class,'votar'])->name('blog.votar');
Route::get('/blog/temas/{id}', [\App\Http\Controllers\BlogController::class, 'tags'])->name('blog.tema');

Route::get('/verificar-alumno/{email}', [\App\Http\Controllers\InscripcionController::class, 'verificar'])->name('verificar-alumno');
Route::post('/inscripcion', [\App\Http\Controllers\InscripcionController::class, 'store'])->name('inscripcion.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/web.admin.php';
require __DIR__.'/web.alumnos.php';
