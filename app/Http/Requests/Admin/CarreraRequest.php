<?php
namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CarreraRequest extends FormRequest {

    /**
     * Devuelve validaciones para aplicar en la petición
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'titulo' => 'required|string|max:255',
            'nombre' => 'required|string|max:255',
            'descripcion_corta' => 'required|string|max:50',
            'anio_inicio' => 'required|numeric|min:1900|max:2050',
            'anio_fin' => 'nullable|numeric|min:1900|max:2050',
            'numero_expediente' => 'string|max:50',
            'numero_resolucion' => 'string|max:50',
            'numero_institucion' => 'required|numeric',
            'mostrar_inscripcion' => ''
        ];
    }
}
