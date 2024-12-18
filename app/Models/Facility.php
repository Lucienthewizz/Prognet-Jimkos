<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Facility extends Model
{
    protected $fillable = ['name'];

    public function kosts(): BelongsToMany
    {
        return $this->belongsToMany(Kost::class);
    }
} 