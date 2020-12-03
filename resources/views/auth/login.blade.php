<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <link rel="stylesheet" href="http://alpha-tests.defarsci.com/samba-store-v2//css/formCSS.css">
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://anshulgupta.in/images/designersnest.png" alt="designersnest">
        </div>
        <div class="w40">
            <div class="signInBox active">
                <div class="text">
                    <h3>Heureux de vous revoir</h3>
                    <p>Entrer les informations demander et passer la journee avec nous!</p>

                <p style="margin-top:1rem">Vous n'avez pas encore un compte ? <br><a href="{{ route('register') }}">Inscrivez-vous</a></p>
                <br>
                </div>
            </div>
            <div class="signOutBox">
                <div class="text">
                    <h3>Heureux de vous revoir</h3>
                    <p>Entrer les informations demander et passer la journee avec nous!</p>

                <p style="margin-top:1rem">Vous n'avez pas encore un compte ? <br><a href="{{ route('register') }}">Inscrivez-vous</a></p>
                </div>
            </div>
            </div>
            <div class="w60">
                <div class="new-account-section">
                    <h3 style="color: #008080">Connectez vous</h3>
                    <form method="post" action="{{ route('login') }}">
                        @csrf
                        @method('post')

                        <input type="text" id="email" required name="email" placeholder="email">
                        <label for="email" class="lemail"></label>

                        <input type="password" name="password" required id="password" placeholder="Mot de passe">
                        <label for="password" class="lpass"></label>

                    <button class="btn green-btn">Connexion</button>
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
