<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Crea o actualiza el usuario administrador inicial para AILSBOL WEB.
     */
    public function run()
    {
        $adminRole = Role::where('nombre', 'Administrador')->first();

        User::updateOrCreate(
            ['email' => 'admin@ailsbol.org'],
            [
                'name' => 'Administrador AILSBOL',
                'role_id' => $adminRole ? $adminRole->id : null,
                'telefono' => '00000000',
                'password' => Hash::make('admin12345'),
                'estado' => true,
            ]
        );
    }
}
