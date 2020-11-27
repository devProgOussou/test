<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <link rel="stylesheet" href="/css/formCSS.css">
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://anshulgupta.in/images/designersnest.png" alt="designersnest">
        </div>
        <div class="w40">
            <div class="signInBox active">
                <div class="text">
                    <h3>Bienvenue</h3>
                    <p>Vous avez une entreprise? Alors choisissez un compte professionnel</p>
                </div>
            <button class="btn sign-in-btn">Professionnel</button>

            <p style="margin-top:1rem">Vous avez deja un compte ? <br><a href="{{ route('login') }}">Connectez-vous</a></p>
            </div>
            <div class="signOutBox">
                <div class="text">
                    <h3>Bienvenue</h3>
                    <p>Entrer les informations demander et passer la journee avec nous!</p>
                </div>
                <button class="btn sign-up-btn">Personnel</button>

                <p style="margin-top:1rem">Vous avez deja un compte ? <br><a href="{{ route('login') }}">Connectez-vous</a></p>
            </div>
            </div>
            <div class="w60">
                <div class="new-account-section">
                    <h3 style="margin-top: -65px;">Compte personnel</h3>
                    <form method="post" action="{{ route('register') }}">
                        @csrf
                        @method('post')
                        <input type="hidden" name="isCompany" value="0">
                        <input type="text" id="name" name="username" required placeholder="Nom">
                        <label for="name" class="lname"></label>

                        <input type="text" id="name" name="name" required placeholder="Prenom">
                        <label for="name" class="lname"></label>

                        <input type="email" id="email" name="email" required placeholder="Email">
                        <label for="email" class="lemail"></label>

                        <input type="text" id="email" required name="address" placeholder="Adresse">
                        <label for="email" class="lemail"></label>

                        <input type="text" id="email" required name="phone" placeholder="Telephone">
                        <label for="email" class="lemail"></label>

                        <input type="password" name="password" required id="password" placeholder="Mot de passe">
                        <label for="password" class="lpass"></label>

                    <input type="password" id="password" name="password_confirmation" required autocomplete="new-password" placeholder="Confirmer mot de passe">
                    <label for="password" class="lpass"></label>

                    <button class="btn green-btn">Inscription</button>
                </form>
            </div>
            <div class="sign-in-section">
                <h3 style="margin-top: -65px;">Creer un compte professionnel</h3>
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    @method('post')
                    <input type="hidden" name="isCompany" value="1">
                    <input type="text" id="signInEmail" name="name" required placeholder="Nom de l'entreprise">
                    <label for="signInEmail" class="lemail"></label>

                    <input type="hidden" id="signInEmail" name="username" value="NULL">

                    <input type="text" id="signInEmail" name="address" required placeholder="Adresse">
                    <label for="signInEmail" class="lemail"></label>

                    <input type="text" id="signInEmail" required name="phone" placeholder="Telephone">
                    <label for="signInEmail" class="lemail"></label>

                    <input type="email" id="signInEmail" name="email" autofocus required placeholder="Email">
                    <label for="signInEmail" class="lemail"></label>

                    <input type="password" id="signInPassword" name="password" placeholder="Mot de passe">
                    <label for="signInPassword" class="lpass"></label>

                    <input type="password" id="signInPassword" name="password_confirmation" required autocomplete="new-password" placeholder="Confirmer mot de passe">
                    <label for="signInPassword" class="lpass"></label>
                    <button class="btn green-btn">Inscription</button>
                </form>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script>
      <script>
          $(function() {
        $(".sign-in-btn").click(function() {
        $(".w40").addClass("active");
        $(".sign-in-btn").addClass("active");
        $(".sign-up-btn").removeClass("active");
        $(".signInBox").removeClass("active");
        $(".signOutBox").addClass("active");
        $(".w40").removeClass("shift-left");
        $(".w60").removeClass("shift-right");
        $(".w60").addClass("active");
        $(".new-account-section").addClass("active");
        $(".sign-in-section").addClass("active");
    });
});
$(function() {
        $(".sign-up-btn").click(function() {
        $(".sign-in-btn").removeClass("active");
        $(".sign-up-btn").addClass("active");
        $(".w40").removeClass("active");
        $(".w40").addClass("shift-left");
        $(".signInBox").addClass("active");
        $(".signOutBox").removeClass("active");
        $(".w60").removeClass("active");
        $(".w60").addClass("shift-right");
        $(".new-account-section").removeClass("active");
        $(".sign-in-section").removeClass("active");
    });
});

    </script>
</body>
</html>
