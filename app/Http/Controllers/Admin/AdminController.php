<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Company;
use App\Models\Personal;
use App\Models\contactForm;
use Illuminate\Http\Request;
use App\Models\Advertisement;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response|\Inertia\Response
     */
    public function show($id)
    {
        $user = DB::select("SELECT * FROM users WHERE id = $id");
        $advertisements = DB::select("SELECT * FROM advertisements WHERE user_id = $id");
        return Inertia::render('Admin/User', [
            'user' => $user,
            'advertisements' => $advertisements
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified user from storage.
     *
     * @param  int  $id
     * @return RedirectResponse|Response
     */
    public function destroy($id)
    {
        DB::delete("DELETE FROM personals WHERE user_id = $id");
        DB::delete("DELETE FROM companies WHERE user_id = $id");
        DB::delete("DELETE FROM advertisements WHERE user_id = $id");
        DB::delete("DELETE FROM messages WHERE user_id = $id");
        DB::delete("DELETE FROM users WHERE id = $id");
        return back();
    }

    /**
     * Display the list user's Company.
     *
     * @return Response|\Inertia\Response
     */
    public function showCompanies()
    {
        $companies = DB::select("SELECT * FROM users INNER JOIN companies WHERE users.id = companies.user_id");

        return Inertia::render('Admin/CompanyShow', [
            'companies' => $companies
        ]);
    }

    /**
     * Display the list user's Personal.
     *
     * @return Response|\Inertia\Response
     */
    public function showPersonals()
    {
        $personals = DB::select("SELECT * FROM users INNER JOIN personals WHERE users.id = personals.user_id");

        return Inertia::render('Admin/PersonalShow', [
            'personals' => $personals
        ]);
    }


     /**
     * Deactivate the specific user.
     *
     * @param  int  $id
     * @return RedirectResponse|Response
     */
    public function deactivate($id)
    {
        DB::update("UPDATE users SET isActive = false WHERE id = $id");
        return back();
    }

    /**
     * Activate the specific user.
     *
     * @param  int  $id
     * @return RedirectResponse|Response
     */
    public function activate($id)
    {
        DB::update("UPDATE users SET isActive = true WHERE id = $id");
        return back();
    }


    /**
     * Display the specific user's Company.
     *
     * @param  int  $id
     * @return Response|\Inertia\Response
     */
    public function showCompany($id)
    {
        $company = Company::all()->where('id', $id);
        $advertisements = Advertisement::all()->where('user_id', $id);
        // dd($company);
        return Inertia::render('Admin/showCompany', [
            'company' => $company,
            'advertisements' => $advertisements
        ]);
    }

    public function showPersonal($id)
    {
        $personal = User::all()->where('id', $id);
        $advertisements = Advertisement::all()->where('personal_id', $id);
        // dd($personal);
        return Inertia::render('Admin/showPersonal', [
            'personal' => $personal,
            'advertisements' => $advertisements
        ]);
    }

    public function DeletePersonalPost($id)
    {
        DB::delete("DELETE FROM advertisements WHERE id = $id");
        return back();
    }

    public function personalDelete($id)
    {
        // User::find()->delete();
        DB::delete("DELETE FROM advertisements WHERE personal_id = $id");
        DB::delete("DELETE FROM personals WHERE user_id = $id");
        DB::delete("DELETE FROM users WHERE id = $id");

        return back();
    }

    public function companyDelete($id)
    {

        DB::delete("DELETE FROM advertisements WHERE company_id = $id");
        DB::delete("DELETE FROM companies WHERE user_id = $id");
        DB::delete("DELETE FROM users WHERE id = $id");
        return back();
    }

    public function contactAdmin(Request $request)
    {
        $contactAdmin = new contactForm();
        $contactAdmin->messages = $request->input('messages');
        $contactAdmin->user_id = Auth::user()->id;
        $contactAdmin->save();
        return redirect()->route('Admin.messageSave');
    }

    public function messageSave()
    {
        return Inertia::render('User/Deactivate');
    }

    public function sendMessageToUserDeactivated()
    {

    }
}
