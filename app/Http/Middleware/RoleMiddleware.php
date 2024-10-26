<?php

namespace App\Http\Middleware;

use App\Core\Constants\TipoUsuario;
use App\Models\Rol;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        $rol =  Rol::getRol( $request->user()->rol_id );

        if($role === 'admin' && $rol->tipo_usuario_id !== TipoUsuario::Administrador) {
            return redirect()->intended('/');
        } else if($role === 'profesor' && $rol->tipo_usuario_id !== TipoUsuario::Profesor) {
            return redirect()->intended('/');
        } else if($role === 'alumno' && $rol->tipo_usuario_id !== TipoUsuario::Alumno) {
            return redirect()->intended('/');
        }

        return $next($request);
    }
}
