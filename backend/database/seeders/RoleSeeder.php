<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Crea los roles principales que usará AILSBOL WEB.
     */
    public function run()
    {
        Role::create([
            'nombre' => 'Administrador',
            'descripcion' => 'Usuario encargado de administrar el sistema.',
            'estado' => true,
        ]);

        Role::create([
            'nombre' => 'Docente',
            'descripcion' => 'Usuario encargado de administrar contenidos formativos.',
            'estado' => true,
        ]);

        Role::create([
            'nombre' => 'Estudiante',
            'descripcion' => 'Usuario que participa en los cursos de formación virtual.',
            'estado' => true,
        ]);

        Role::create([
            'nombre' => 'Intérprete',
            'descripcion' => 'Usuario registrado como intérprete o miembro de AILSBOL.',
            'estado' => true,
        ]);

        Role::create([
            'nombre' => 'Solicitante',
            'descripcion' => 'Usuario que solicita servicios de interpretación.',
            'estado' => true,
        ]);
    }
}
