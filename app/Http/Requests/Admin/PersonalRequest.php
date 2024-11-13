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
            'piso' => 'required|numeric|max:10',
            'departamento' => 'required|string|max:10',
            'localidad' => 'required|string|max:250',
            'celular' => 'required|string|max:50',
            'telefono' => 'required|string|max:50',
            'nacionalidad' => 'required|string|max:150',
            'email' => 'required|string|email|max:250', // Añadí 'email' para validar formato de email
            'estadoCivil'=> 'required|string|max:10',
            'foto'=>'required|string|50',
            'titulo'=>'required|string|50',
            'tramoPedagogico'=>'required|tinyint',
            'personalEstado' => 'required|numeric|exists:personal_estados,id' // Añadí 'exists' para validar relación

        ];
    }
}
