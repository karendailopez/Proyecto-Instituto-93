<?php
namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PersonalRequest extends FormRequest
{
    /**
     * Devuelve validaciones para aplicar en la petición
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'numeroDocumento' => 'required|string|max:10',
            'nombre' => 'required|string|max:50',
            'apellido' => 'required|string|max:50',
            'fechaNacimiento' => 'required|date',
            'sexo' => 'required|string|max:1',
            'direccion' => 'required|string|max:250',
            'piso' => 'nullable|numeric|max:10',
            'departamento' => 'nullable|string|max:10',
            'localidad' => 'required|string|max:250',
            'celular' => 'nullable|string|max:50',
            'telefono' => 'nullable|string|max:50',
            'nacionalidad' => 'required|string|max:150',
            'email' => 'required|string|email|max:250', // Añadí 'email' para validar formato de email
            'estadoCivil'=> 'nullable|required|string|max:10',
            'foto'=>'nullable|string|50',
            'titulo'=>'nullable|string|50',
            'tramoPedagogico'=>'nullable|boolean',
            'personalEstado' => 'required|numeric|exists:personal_estados,id', // Añadí 'exists' para validar relación
            'fechaAlta'=>'nullable|date',
            'fechaBaja' => 'nullable|date',

        ];
    }
}
