<?php

namespace App\Models;

use App\Models\User;
use App\Models\Advertisement;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Personal extends Model
{
    use HasFactory;

    protected $fillable = [
        'lastName', 'firstName', 'address', 'phone', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function advertisements()
    {
        return $this->hasMany(Advertisement::class);
    }
}
