<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Kost extends Model
{
    protected $fillable = [
        'name',
        'type',
        'price',
        'location',
        'distance',
        'description',
        'image',
        'is_available',
        'manager_id',
        'status',
        'rejection_reason'
    ];

    public function facilities(): BelongsToMany
    {
        return $this->belongsToMany(Facility::class);
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }
} 