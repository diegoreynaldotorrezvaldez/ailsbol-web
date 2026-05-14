<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Agrega campos necesarios a la tabla users para relacionar usuarios con roles
     * y permitir el control básico de estado dentro de AILSBOL WEB.
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // Relación del usuario con un rol del sistema.
            // Puede ser Administrador, Docente, Estudiante, Intérprete o Solicitante.
            $table->foreignId('role_id')
                  ->nullable()
                  ->after('id')
                  ->constrained('roles')
                  ->nullOnDelete();

            // Teléfono del usuario para contacto institucional.
            $table->string('telefono')->nullable()->after('email');

            // Estado del usuario: true = activo, false = inactivo.
            $table->boolean('estado')->default(true)->after('password');
        });
    }

    /**
     * Revierte los cambios realizados en la tabla users.
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // Primero se elimina la clave foránea para evitar errores.
            $table->dropForeign(['role_id']);

            // Luego se eliminan las columnas agregadas.
            $table->dropColumn(['role_id', 'telefono', 'estado']);
        });
    }
};
