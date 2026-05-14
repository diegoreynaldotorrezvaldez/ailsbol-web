<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    /**
     * Campos que se pueden registrar de forma masiva.
     */
    protected $fillable = [
        'nombre',
        'descripcion',
        'estado',
    ];
}
