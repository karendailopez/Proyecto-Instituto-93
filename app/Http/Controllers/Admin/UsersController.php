<?php

namespace App\Http\Controllers\Admin;

use App\Core\Constants\TipoUsuario;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserRequest;
use App\Models\Rol;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::porTipoUsuario(TipoUsuario::Administrador)->get();

        return Inertia::render('Admin/Users/Index', compact('users'));
    }

    public function create()
    {
        $roles = Rol::getDropdown(TipoUsuario::Administrador);

        return Inertia::render('Admin/Users/Create', compact('roles'));
    }

    public function store(UserRequest $request) : RedirectResponse
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rol_id' => $request->rol_id,
            'email_verified_at' => Carbon::now()
        ]);

        return Redirect::route('admin.users.index');
    }
}
