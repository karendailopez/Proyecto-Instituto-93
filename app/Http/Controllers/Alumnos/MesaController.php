<?php
namespace App\Http\Controllers\Alumnos;

use App\Http\Controllers\Controller;
use App\Models\Mesa; 
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AlumnoCarrera;
use App\Models\Alumno;
use App\Models\CursadaAlumno;
use App\Models\MesaAlumno;
use Carbon\Carbon;
use App\Models\CursoMateria;

class MesaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
{
    $user = $request->user();
    $alumno = Alumno::where('user_id', $user->id)->firstOrFail();
    $alumnoCarrera = AlumnoCarrera::where('alumno_id', $alumno->id)->firstOrFail();

    $cursadas_alumno = CursadaAlumno::where('alumno_carrera_id', $alumnoCarrera->id)
                                        ->with(['cursada'])
                                        ->get();
    $cursos_materias_ids = array();

    //Traemos todos los id de cursada_materia de cada curso que pertenece el alumno
    foreach ($cursadas_alumno as $cursada_alumno) {
        $cursada_materias = CursoMateria::where('curso_id', $cursada_alumno->cursada->id)->get();

        foreach($cursada_materias as $cursada_materia){
            array_push($cursos_materias_ids, $cursada_materia->id);
        }
    }   

// Filtrar mesas por curso_materia_id
$mesas = Mesa::with(['personalPresidente', 'personalAuxiliar', 'materia', 'curso'])
->whereIn('curso_materia_id', $cursos_materias_ids)
->get();

return Inertia::render('Alumnos/Mesas/Index', [
'carrera' => $alumnoCarrera, 
'mesas' => $mesas,
'mesas_alumno' => MesaAlumno::where('alumno_carrera_id', $alumnoCarrera->id)->get(),
]);
}



    public function store(Request $request)
    {
        $mesas = $request->input('selectedMesas');

        for($i = 0; $i < count($mesas); $i++){
            if($mesas[$i]['registrar']){
                MesaAlumno::create([
                    'mesa_id' => $mesas[$i]['mesa_id'],
                    'alumno_carrera_id' => 2,
                    'cursada_alumno_id' => null,
                    'mesa_alumno_estado_id' => $mesas[$i]['inscripto'] ? 1 : 2,
                    'nota_numerica' => null
                 ]);
            }else{
                $mesaActualizar = MesaAlumno::find($mesas[$i]['mesa_alumno_id']);
                $mesaActualizar['mesa_alumno_estado_id'] = $mesas[$i]['inscripto'] ? 1 : 2;
                $mesaActualizar->save();
            }
        }

         
    }

    public function updateSelectedMesas(Request $request)
    {
        $user = $request->user(); // Obtener el usuario autenticado
        $alumno = Alumno::where('user_id', $user->id)->firstOrFail();
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