<?php

use App\Http\Controllers\Alumnos\DashboardController;
use App\Http\Controllers\Alumnos\MesaController;
use Illuminate\Support\Facades\Route;
Route::group(['prefix' => 'alumnos', 'as' => 'alumnos.', 'middleware' => ['auth', 'role:Alumno']], function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::resource('mesas', MesaController::class);
    Route::put('mesas', [MesaController::class, 'store'])->name('mesa.store');
    Route::post('mesas/selected', [MesaController::class, 'updateSelectedMesas'])->name('mesas.updateSelected');

   //Route::get('/mesas', [MesaController::class, 'index']);
});
