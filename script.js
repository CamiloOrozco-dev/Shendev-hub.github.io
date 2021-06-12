$(window).ready(function () {

    $(".btnsubmit").click(function () {
        var name = $(".name").val();
        var password = $(".password").val();
        if(name === "" || password === ""){
            name === "" ? $(".error-name").removeClass('d-none') : null
            password === "" ? $(".error-password").removeClass('d-none') : null
        }
        else if (name === "camilo" && password === "sena") {
            window.open("home.html", "_self")
        }
        else {
            window.open("error.html", "_self")
        }
    });

    $(".name").keyup(function () {
        var name = $(".name").val();
        if (name !== "") {
            $(".error-name").addClass('d-none')
        }
        else {
            $(".error-name").removeClass('d-none')
        }
    });
    $(".password").keyup(function () {
        var password = $(".password").val();
        if (password !== "") {
            $(".error-password").addClass('d-none')
        }
        else {
            $(".error-password").removeClass('d-none')
        }
    });
});
