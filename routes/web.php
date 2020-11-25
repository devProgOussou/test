<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\Home\WelcomeController;
use App\Http\Controllers\Message\MessageController;
use App\Http\Controllers\Advertisement\AdvertisementController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::get('/post/{id}', [WelcomeController::class, 'show'])->middleware('auth')->name('welcome.show');

Auth::routes();

Route::post('/sendMessage', [MessageController::class, 'store'])->name('message.store');
Route::get('/message', [MessageController::class, 'displayAllMessage'])->name('message.displayAllMessage');
Route::get('/message/{id}', [MessageController::class, 'show'])->name('message.show');

// FACEBOOK LOGIN
Route::get('login/{provider}', [SocialController::class, 'redirectToProvider'])->name('social.login');
Route::get('login/{provider}/callback', [SocialController::class, 'handleProviderCallback']);


Route::get('/home', [HomeController::class, 'index'])->name('home.index');
Route::get('/deactivate', [UserController::class, 'showDash'])->name('user.dash');
Route::get('/MessageSave', [AdminController::class, 'messageSave'])->name('Admin.messageSave');
Route::post('/contactAdmin', [AdminController::class, 'contactAdmin'])->name('contactAdmin.admin');
Route::get('/UserDeactivated', [AdminController::class, 'UserDeactivated'])->name('admin.UserDeactivated');
Route::post('/sendMessageToUserDeactivated', [AdminController::class, 'sendMessageToUserDeactivated'])->name('admin.sendMessageToUserDeactivated');
Route::post('/userRegistering', [UserController::class, 'store'])->name('user.store');
Route::post('/userPost', [AdvertisementController::class, 'store'])->name('userPost');
Route::get('/userPost', [AdvertisementController::class, 'create'])->name('user.index');
Route::get('/advertisement/{id}', [AdvertisementController::class, 'show'])->name('advertisement.show');
Route::get('/advertisementDestroy/{id}', [AdvertisementController::class, 'destroy'])->name('advertisement.destroy');
Route::delete('/advertisementDestroy/{id}', [AdvertisementController::class, 'destroy'])->name('advertisement.destroyed');
Route::get('/deactivate/{id}', [AdvertisementController::class, 'deactivate'])->name('advertisement.deactivate');
Route::put('/deactivate/{id}', [AdvertisementController::class, 'deactivate'])->name('advertisement.deactivated');
Route::get('/activate/{id}', [AdvertisementController::class, 'activate'])->name('advertisement.activate');
Route::put('/activate/{id}', [AdvertisementController::class, 'activate'])->name('advertisement.activated');
Route::get('/user/{id}', [AdminController::class, 'show'])->name('admin.show');
Route::get('/userDeactivate/{id}', [AdminController::class, 'deactivate'])->name('admin.deactivate');
Route::put('/userDeactivate/{id}', [AdminController::class], 'deactivate')->name('admin.deactivated');
Route::get('/userActivate/{id}', [AdminController::class, 'activate'])->name('admin.activate');
Route::put('/userActivate/{id}', [AdminController::class, 'activate'])->name('admin.activated');
Route::get('/userDelete/{id}', [AdminController::class, 'destroy'])->name('admin.destroy');
Route::delete('/userDelete/{id}', [AdminController::class, 'destroy'])->name('admin.destroyed');
Route::get('/showCompanies', [AdminController::class, 'showCompanies'])->name('admin.showCompanies');
Route::get('/showPersonals', [AdminController::class, 'showPersonals'])->name('admin.showPersonals');
Route::get('/company/{id}', [AdminController::class, 'showCompany'])->name('admin.showCompany');
Route::get('/personal/{id}', [AdminController::class, 'showPersonal'])->name('admin.showPersonal');
Route::get('/DeletePersonalPost/{id}', [AdminController::class, 'DeletePersonalPost'])->name('admin.showPersonalDelete');
Route::delete('/DeletePersonalPost/{id}', [AdminController::class, 'DeletePersonalPost'])->name('admin.DeletedPersonalPost');
Route::get('/personalDelete/{id}', [AdminController::class, 'personalDelete'])->name('admin.personalDelete');
Route::get('/personalDelete/{id}', [AdminController::class, 'personalDelete'])->name('admin.personalDeleted');
Route::get('/companyDelete/{id}', [AdminController::class, 'companyDelete'])->name('admin.companyDelete');
Route::delete('/companyDelete/{id}', [AdminController::class, 'companyDelete'])->name('admin.companyDeleted');
Route::get('/updateUserProfile/{id}', [UserController::class, 'edit'])->name('user.updateProfile');
Route::post('/updateUserProfile/{id}', [UserController::class, 'updateUser'])->name('user.updateProfiled');
// Route::get('/updateCompanyProfile/{id}', [UserController::class, 'UpdateCompany'])->name();
Route::post('/updateCompanyProfile/{id}', [UserController::class, 'UpdateCompany'])->name('ompany.update');


// use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
