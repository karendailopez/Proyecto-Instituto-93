<?php

namespace App\Http\Requests\Admin;

use App\Models\Rol;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;

class UserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $emailRule = 'required|string|email|max:255|unique:'.User::class;
        $passwordRule = ['required', 'confirmed', Rules\Password::defaults()];

        if ($this->route('user')) {
            $emailRule = ['required', 'string', 'email', 'max:255', Rule::unique(User::class)->ignore( $this->route('user') )];
            $passwordRule = ['confirmed', Rules\Password::defaults()];
        }

        return [
            'name' => 'required|string|max:255',
            'email' => $emailRule,
            'password' => $passwordRule,
            'rol_id' => ['required', Rule::exists(Rol::class, 'id')],
        ];
    }
}
