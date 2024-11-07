<?php
namespace App\Http\Controllers\Alumnos;

use App\Http\Controllers\Controller;
use App\Models\Mesa; 
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AlumnoCarrera;
use App\Models\CursadaAlumno;
use App\Models\MesaAlumno;
use Carbon\Carbon;

class MesaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user(); // Obtener el usuario autenticado
        $alumno = $user->alumno;

        if ($alumno) {
            $alumnoCarrera = AlumnoCarrera::where('alumno_id', $alumno->id)->first();

            if ($alumnoCarrera) {
                $request->session()->put('alumno_carrera_id', $alumnoCarrera->carrera_id);
            }
        }

        $cursadas_alumno = CursadaAlumno::where('alumno_carrera_id', $alumnoCarrera->id)
                                        ->with(['cursada'])
                                        ->get();

        $curso_materia_ids = array();

        foreach ($cursadas_alumno as $cursada_alumno) {
            array_push($curso_materia_ids, $cursada_alumno->cursada->cursoMateria->id);
        }

        // Filtra mesas y actualiza su estado
        $mesas = Mesa::with(['personalPresidente', 'personalAuxiliar', 'materia', 'curso'])
                    ->whereIn('curso_materia_id', $curso_materia_ids)
                    ->get()
                    ->map(function ($mesa) {
                        // Si han pasado más de dos semanas, desactivar la mesa
                        if (Carbon::parse($mesa->fecha_hora_1)->addWeeks(2)->isPast()) {
                            $mesa->activo = false;
                            $mesa->save(); // Guardar el cambio en la base de datos
                        }
                        return $mesa;
                    });

        return Inertia::render('Alumnos/Mesas/Index', [
            'carrera' => $alumnoCarrera, 
            'mesas' => $mesas,
            'mesas_alumno' => MesaAlumno::where('alumno_carrera_id', $alumnoCarrera->id)->get(),
        ]);
    }






    public function updateSelectedMesas(Request $request)
    {
        $user = $request->user(); // Obtener el usuario autenticado
        $alumno = $user->alumno; 
        $selectedMesas = $request->input('selectedMesas'); // Obtener el array de ID de mesas seleccionadas

        if ($alumno) {
            $alumnoCarrera = AlumnoCarrera::where('alumno_id', $alumno->id)->first();

            if ($alumnoCarrera) {
                
                MesaAlumno::where('alumno_carrera_id', $alumnoCarrera->id)->delete();// Eliminar las selecciones actuales para ese alumno_carrera_id

                foreach ($selectedMesas as $mesaId) { // Insertar las nuevas selecciones
                    MesaAlumno::create([
                        'mesa_id' => $mesaId,
                        'alumno_carrera_id' => $alumnoCarrera->id,
                        'mesa_alumno_estado_id' => 1 // Asignar el estado predeterminado
                    ]);
                }
            }
        }
    }



}