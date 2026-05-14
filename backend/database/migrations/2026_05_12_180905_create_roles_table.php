<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::create('roles', function (Blueprint $table) {
        // Identificador único del rol
        $table->id();

        // Nombre del rol: administrador, docente, estudiante, intérprete, solicitante
        $table->string('nombre')->unique();

        // Descripción breve del rol dentro del sistema
        $table->string('descripcion')->nullable();

        // Estado del rol: activo o inactivo
        $table->boolean('estado')->default(true);

        // Fechas de creación y actualización del registro
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
};
