<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Crea o actualiza los roles principales que usará AILSBOL WEB.
     */
    public function run()
    {
        $roles = [
            [
                'nombre' => 'Administrador',
                'descripcion' => 'Usuario encargado de administrar el sistema.',
                'estado' => true,
            ],
            [
                'nombre' => 'Docente',
                'descripcion' => 'Usuario encargado de administrar contenidos formativos.',
                'estado' => true,
            ],
            [
                'nombre' => 'Estudiante',
                'descripcion' => 'Usuario que participa en los cursos de formación virtual.',
                'estado' => true,
            ],
            [
                'nombre' => 'Intérprete',
                'descripcion' => 'Usuario registrado como intérprete o miembro de AILSBOL.',
                'estado' => true,
            ],
            [
                'nombre' => 'Solicitante',
                'descripcion' => 'Usuario que solicita servicios de interpretación.',
                'estado' => true,
            ],
        ];

        foreach ($roles as $role) {
            Role::updateOrCreate(
                ['nombre' => $role['nombre']],
                $role
            );
        }
    }
}
