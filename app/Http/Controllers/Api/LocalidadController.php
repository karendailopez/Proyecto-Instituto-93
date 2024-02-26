<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Localidad;

class LocalidadController extends Controller
{
    public function get($id) {
        $localidades = Localidad::getDropdown($id);

        return $localidades;
    }
}
