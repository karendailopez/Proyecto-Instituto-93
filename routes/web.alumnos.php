<?php

use App\Http\Controllers\Alumnos\DashboardController;

Route::group(['prefix' => 'alumnos', 'as' => 'alumnos.', 'middleware' => ['auth', 'role:alumno']], function () {
    Route::resource('dashboard', DashboardController::class);
});
