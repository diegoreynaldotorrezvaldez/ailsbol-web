<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Permite iniciar sesión en AILSBOL WEB.
     * Valida el correo, la contraseña y el estado del usuario.
     */
    public function login(Request $request)
    {
        // Validación básica de los datos enviados desde el frontend.
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Busca el usuario por correo e incluye su rol.
        $user = User::with('role')->where('email', $request->email)->first();

        // Verifica si el usuario existe.
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'El usuario no existe.',
            ], 401);
        }

        // Verifica si el usuario está activo.
        if (!$user->estado) {
            return response()->json([
                'success' => false,
                'message' => 'El usuario se encuentra inactivo.',
            ], 403);
        }

        // Verifica la contraseña ingresada.
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'La contraseña es incorrecta.',
            ], 401);
        }

        // Respuesta correcta para el frontend.
        return response()->json([
            'success' => true,
            'message' => 'Inicio de sesión correcto.',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'telefono' => $user->telefono,
                'estado' => $user->estado,
                'role' => $user->role ? [
                    'id' => $user->role->id,
                    'nombre' => $user->role->nombre,
                    'descripcion' => $user->role->descripcion,
                ] : null,
            ],
        ]);
    }

    /**
     * Cierra la sesión desde el frontend.
     * En esta primera versión, el cierre de sesión se controlará desde React.
     */
    public function logout()
    {
        return response()->json([
            'success' => true,
            'message' => 'Sesión cerrada correctamente.',
        ]);
    }
}
