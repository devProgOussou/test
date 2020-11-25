<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Advertisement;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $users = User::all()->where('isAdmin', 0);
        $advertisements = Advertisement::all()->where('user_id', Auth::user()->id);

        if (Auth::check() && Auth::user()->isAdmin == false && Auth::user()->isActive == true) {
            if (Auth::user()->isRegister != true) {
                return Inertia::render('User/Register');
            } else {
                return Inertia::render('User/Dashboard', [
                    'advertisements' => $advertisements,
                ]);
            }
        }
        elseif(Auth::check() && Auth::user()->isAdmin == false && Auth::user()->isActive == false)
        {
            return Inertia::render('User/Deactivate');
        }
        else {
            return Inertia::render('Admin/Index',[
                'users' => $users
            ]);
        }
    }
}
