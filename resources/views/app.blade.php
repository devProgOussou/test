<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset(mix('/css/app.css')) }}" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    {{-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    {{-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> --}}
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="{{ asset(mix('/js/app.js')) }}" defer></script>
    <script>

    </script>
  </head>
  <body>


<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="{{ url('/') }}">SAMBA-STORE</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        {{-- @if(Auth::check())
            @if(Auth::user()->avatar != null)
                <img class="mr-2 rounded d-none d-md" src='{{ asset("uploads/avatar/".Auth::user()->avatar) }}' width="40" height="40" alt="avatar">
                <a class="nav-link d-none d-md" href="{{ url('/home') }}" style="text-decoration: none; color: white">{{ Auth::user()->name }}</a>
            @else
                <img class="mr-2 d-none d-md" src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" alt="avatar" />
                <a class="nav-link d-none d-md" href="{{ url('/home') }}" style="text-decoration: none; color: white">{{ Auth::user()->name }}</a>
            @endif
        @endif --}}
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-sm-5" style="margin-left: 25rem;">
            @guest
            <li class="nav-item">
                <a class="nav-link" href="{{ route('login') }}">Connexion</a>
            </li>
            @if (Route::has('register'))
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('register') }}">Inscription</a>
                </li>
            @endif
        @else
        {{-- @if(Auth::check()) --}}
            <li class="nav-item">
                <a class="nav-link" href="{{ url('/') }}">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ url('/updateUserProfile/'.Auth::user()->id) }}">Modifier profil</a>
            </li>
        {{-- @endif --}}
            <li class="nav-item">
                <a class="nav-link" href="{{ url('/userPost') }}">poster une annonce</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ url('/userPost') }}"onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    Deconnexion
                </a>
            </li>
        {{-- @endif --}}
        @endguest
        </ul>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
            @csrf
        </form>
      </div>
    </nav>




    {{-- <nav class="navbar navbar-expand-md navbar-light shadow-sm" style="background-color: #008080">
        <a class="navbar-brand text-light" href="{{ route('home') }}">SAMBA-STORE</a>
        <div class="pmd-user-info ml-auto">
            @if (Route::has('login'))
            <a href="" style="size:10px; text-decoration:none; color:white" class="align-items-left" >
                    @auth
                        @if(Auth::user()->avatar != null)
                            <img class="mr-2 rounded" src='{{ asset("uploads/avatar/".Auth::user()->avatar) }}' width="40" height="40" alt="avatar">
                            <a href="{{ url('/home') }}" style="text-decoration: none; color: white">{{ Auth::user()->name }}</a>
                        @else
                            <img class="mr-2" src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" alt="avatar" />
                            <a href="{{ url('/home') }}" style="text-decoration: none; color: white">{{ Auth::user()->name }}</a>
                        @endif
                    @else
                        <a style="color:white" class="mr-2" href="{{ route('login') }}">Connexion</a>

                    @if (Route::has('register'))
                        <a style="color: white" href="{{ route('register') }}">Inscription</a>
                    @endif
                    @endauth
                </a>
                @endif
            @if(Auth::check())
                @if(Auth::check())
                <a class="navbar-link" style="size:10px; text-decoration:none; color:white" href="{{ url('/updateUserProfile/'.Auth::user()->id) }}">
                    Modifier profil |
                </a>
                @endif
                <a class="navbar-link" style="size:10px; text-decoration:none; color:white" href="{{ url('/userPost') }}">
                    poster une annonce |
                </a>
                <a class="navbar-link" style="size:10px; text-decoration:none; color:white" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    Deconnexion
                </a>
            @endif
            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
        </div>
    </nav> --}}
    <div>
        @inertia
    </div>
  </body>
</html>
