<?php


namespace App\Http\Controllers\Alumnos;

use App\Models\Mesa;
use App\Http\Controllers\Controller; 

class MesaController extends Controller
{
    public function index()
    {
        // Obtén las mesas junto con sus relaciones
        $mesas = Mesa::with(['materia', 'personalPresidente', 'personalAuxiliar'])->get();

        // Retorna la vista y envía los datos de las mesas
        return inertia('Alumnos/Mesas/Index', [
            'mesas' => $mesas]);
    }
}
