<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Company;
use App\Models\Personal;
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

        if(Auth::check() && Auth::user()->isAdmin == false)
        {
            if (Auth::user()->isCompany == true && Auth::user()->isRegister == false) {
                $company = new Company();
                $company->companyName = Auth::user()->name;
                $company->address = Auth::user()->address;
                $company->phone = Auth::user()->phone;
                $company->user_id = Auth::user()->id;
                $company->save();
                DB::update("UPDATE users SET isRegister = true WHERE id = ".Auth::user()->id);
                return Inertia::render('User/Dashboard', [
                    'advertisements' => $advertisements,
                ]);
            }
            elseif(Auth::user()->isCompany == false && Auth::user()->isRegister == false) {
                $personal = new Personal();
                $personal->lastName = Auth::user()->username;
                $personal->firstName = Auth::user()->name;
                $personal->address = Auth::user()->address;
                $personal->phone = Auth::user()->phone;
                $personal->user_id = Auth::user()->id;
                $personal->save();
                DB::update("UPDATE users SET isRegister = true WHERE id = ".Auth::user()->id);
                return Inertia::render('User/Dashboard', [
                    'advertisements' => $advertisements,
                ]);
            }
            else {
                return Inertia::render('User/Dashboard', [
                    'advertisements' => $advertisements,
                ]);
            }
        }
        elseif(Auth::check() && Auth::user()->isAdmin == false && Auth::user()->isActive == false)
        {
            return Inertia::render('User/Deactivate');
        }
        else
        {
            return Inertia::render('Admin/Index',[
                'users' => $users
            ]);
        }
    }
}
