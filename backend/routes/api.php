<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RoleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Rutas API para AILSBOL WEB.
| Estas rutas serán consumidas desde el frontend desarrollado en React.js.
|
*/

// Rutas de autenticación.
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

// Ruta de prueba.
Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'API de AILSBOL WEB funcionando correctamente.',
    ]);
});

// Rutas de roles.
Route::get('/roles', [RoleController::class, 'index']);

// Rutas de usuarios.
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::patch('/users/{id}/toggle-status', [UserController::class, 'toggleStatus']);
