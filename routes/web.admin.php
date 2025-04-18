<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => [/*'auth', 'role:Alumno'*/]], function () {
    Route::get('dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard.index');
    Route::resource('users', \App\Http\Controllers\Admin\UsersController::class);

     Route::resource('alumnos', \App\Http\Controllers\Admin\AlumnosController::class);
     Route::resource('carreras', \App\Http\Controllers\Admin\CarrerasController::class);
     Route::put('carreras/{carrera}/estado', [\App\Http\Controllers\Admin\CarrerasController::class, 'estado'])->name('carreras.estado');
     Route::resource('personal', \App\Http\Controllers\Admin\PersonalController::class);
     Route::put('personal/{personal}/estado', [\App\Http\Controllers\Admin\PersonalController::class, 'estado'])->name('personal.estado');
     
});
