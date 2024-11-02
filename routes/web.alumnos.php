<?php

use App\Http\Controllers\Alumnos\DashboardController;
use App\Http\Controllers\Alumnos\MesaController;
use Illuminate\Support\Facades\Route;
Route::group(['prefix' => 'alumnos', 'as' => 'alumnos.', 'middleware' => ['auth']], function () {
    Route::resource('dashboard', DashboardController::class);

   
   Route::resource('mesas', MesaController::class);
   //Route::get('/mesas', [MesaController::class, 'index']);
});
