<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Rol;
use App\Core\Constants\TipoUsuario;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                $rol = Rol::getRol( $request->user()->rol_id);

                switch($rol->tipo_usuario_id) {
                    case TipoUsuario::Administrador:
                        return redirect()->intended(RouteServiceProvider::HOMEADMIN);
                        break;
                    case TipoUsuario::Profesor:
                        return redirect()->intended(RouteServiceProvider::HOMEPROFESOR);
                        break;
                    case TipoUsuario::Alumno:
                        return redirect()->intended(RouteServiceProvider::HOMEALUMNO);
                        break;
                }
            }
        }

        return $next($request);
    }
}
