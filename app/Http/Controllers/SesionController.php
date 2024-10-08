<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class SesionController extends Controller
{
    public function show()
    {
        return Inertia::render('SesionLayout');
    }
}

