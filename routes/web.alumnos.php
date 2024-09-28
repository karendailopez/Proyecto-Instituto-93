<?php

use App\Http\Controllers\Alumnos\DashboardController;
use App\Http\Controllers\Alumnos\MesasController;
use Illuminate\Support\Facades\Route;
Route::group(['prefix' => 'alumnos', 'as' => 'alumnos.', 'middleware' => [/*'auth', 'role:alumno'*/]], function () {
    Route::resource('dashboard', DashboardController::class);

    Route::get('mesas',[MesasController::class, 'index'])->name('mesas.index');
    Route::post('mesas/inscribir',[MesasController::class,'inscribir'])->name('mesas.inscribir');
    Route::post('mesas/desinscribir',[MesasController::class,'desinscribir'])->name('mesas.desinscribir');

});
