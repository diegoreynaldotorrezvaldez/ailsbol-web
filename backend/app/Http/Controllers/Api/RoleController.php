<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;

class RoleController extends Controller
{
    /**
     * Lista los roles registrados en el sistema.
     */
    public function index()
    {
        $roles = Role::where('estado', true)
            ->orderBy('id', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'roles' => $roles,
        ]);
    }
}
