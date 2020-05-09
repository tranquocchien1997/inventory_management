<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->middleware('guest')->except('logout');

        $cookie = $request->cookie('keymain');


        if($cookie == null || $cookie !== 'JmBmJbeIoSW3fwO7Rw3j9wHBoeftU3jsYujnvpyG'){
//            dd(1);
//            return view('welcome');
            abort(404);
        }
    }

    public function validateLogin(Request $request){

        $user = DB::table('users')->where([
            'email' => $request->email,
            'invalid' => 0
        ])->exists();

        if(!$user){
            return $this->sendFailedLoginResponse($request);
        }

        $request->validate([
            $this->username() => 'required|string',
            'password' => 'required|string',
        ]);
    }
}
