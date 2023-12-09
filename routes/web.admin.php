<?php

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => [/*'auth', 'role:admin'*/]], function () {
     Route::get('dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard.index');
});
