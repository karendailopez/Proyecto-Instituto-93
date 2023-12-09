<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/verificar-alumno/{email}', [\App\Http\Controllers\InscripcionController::class, 'verificar'])->name('verificar-alumno');
Route::post('/inscripcion', [\App\Http\Controllers\InscripcionController::class, 'store'])->name('inscripcion.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/web.admin.php';
