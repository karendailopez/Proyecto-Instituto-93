<?php

namespace App\Http\Controllers\Alumnos;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Alumnos/Dashboard/Index');
    }
}
