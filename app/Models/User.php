<?php

namespace App\Models;

use App\Models\Message;
use App\Models\Advertisement;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'name',
        'email',
        'address',
        'phone',
        'isCompany',
        'password',
        'facebook_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getSocialAttribute($value)
    {
        return json_decode($value);
    }

    public function advertisements()
    {
        return $this->hasMany(Advertisement::class);
    }

    public function personals()
    {
        return $this->hasMany(Personal::class);
    }

    public function companies()
    {
        return $this->hasMany(Company::class);
    }
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
