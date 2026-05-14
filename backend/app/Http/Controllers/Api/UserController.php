<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Lista todos los usuarios registrados en AILSBOL WEB.
     * Incluye la información del rol relacionado.
     */
    public function index()
    {
        $users = User::with('role')
            ->orderBy('id', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'users' => $users,
        ]);
    }

    /**
     * Registra un nuevo usuario en el sistema.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'telefono' => 'nullable|string|max:30',
            'password' => 'required|string|min:6',
            'role_id' => 'required|exists:roles,id',
        ]);

        $user = User::create([
            'name' => $request->name,
            'role_id' => $request->role_id,
            'email' => $request->email,
            'telefono' => $request->telefono,
            'password' => Hash::make($request->password),
            'estado' => true,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Usuario registrado correctamente.',
            'user' => $user->load('role'),
        ], 201);
    }

    /**
     * Activa o desactiva un usuario.
     */
    public function toggleStatus($id)
    {
        $user = User::findOrFail($id);
        $user->estado = !$user->estado;
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Estado del usuario actualizado correctamente.',
            'user' => $user->load('role'),
        ]);
    }
}
