<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vocabulary extends Model
{
    use HasFactory;
    public $table = "vocabulary";
    protected $fillable = [
        'id',
        'vocabulary',
        'explain',
        'pronounce',
        'images',
        'example',
        'view',
        'status',
        'created_at',
        'updated_at',
    ];
}
