<?php

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => [/*'auth', 'role:admin'*/]], function () {
     Route::get('dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard.index');
     Route::resource('users', \App\Http\Controllers\Admin\UsersController::class);
     Route::resource('alumnos', \App\Http\Controllers\Admin\AlumnosController::class);
});
