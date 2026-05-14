<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Crea el usuario administrador inicial para AILSBOL WEB.
     */
    public function run()
    {
        // Busca el rol Administrador en la tabla roles.
        $adminRole = Role::where('nombre', 'Administrador')->first();

        // Crea el usuario administrador inicial.
        User::create([
            'name' => 'Administrador AILSBOL',
            'role_id' => $adminRole ? $adminRole->id : null,
            'email' => 'admin@ailsbol.org',
            'telefono' => '00000000',
            'password' => Hash::make('admin12345'),
            'estado' => true,
        ]);
    }
}
