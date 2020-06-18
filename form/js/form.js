$(document).ready(function() {
    $("button").on("click", function(e) {
        e.preventDefault();
    });
    $(".container>div .overlay .first").animate({
        marginTop: "10%"
    }, 500);
    $(".container>div .overlay .first").animate({
        marginTop: 0
    }, 500);
    $(".container .login").css({
        transform: "rotateY(0deg)",
        transition: "1s"
    }, )
    var x = " "
    $("form input").on("focus", function() {
        x = $(this).attr("placeholder")
        $(this).attr("placeholder", " ")
    });
    $("form input").on("blur", function() {

        $(this).attr("placeholder", x)
    });
    $(".container>div> .overlay .left").css({
        backgroundColor: $(".container").css("backgroundColor")
    });
    $(".container>div> .overlay .left-be").css({
        backgroundColor: $(".container").css("backgroundColor")
    });

    /* start moved*/
    $(".container>div .overlay .first button").on("click", function() {
        $(".container>div").animate({
            right: "52%"
        }, 400);
        $(".container>div").animate({
            right: "48%"
        }, 400);
        $(".container>div").animate({
            right: "50%"
        }, 400);
        $(".container>div> .overlay .first").css({
            display: "none"
        });
        $(".container>div> .overlay .second").css({
            display: "block"
        });
        $(".container>div> .overlay .left").css({
            backgroundColor: "transparent"
        });
        $(".container>div> .overlay .left-be").css({
            backgroundColor: "transparent"
        });
        $(".container>div> .overlay .right").css({
            backgroundColor: $(".container").css("backgroundColor")
        })
        $(".container>div> .overlay .right-af").css({
            backgroundColor: $(".container").css("backgroundColor")
        });
        $(".container .signup").css({
            transform: "rotateY(0deg)",
            transition: "1s"
        });

    });
    $(".container>div .overlay .second button").on("click", function() {
        $(".container>div").animate({
            right: "-2%"
        }, 400);
        $(".container>div").animate({
            right: "2%"
        }, 400);
        $(".container>div").animate({
            right: "0"
        }, 400);
        $(".container>div> .overlay .second").css({
            display: "none"
        });
        $(".container>div> .overlay .first").css({
            display: "block"
        });
        $(".container>div> .overlay .right").css({
            backgroundColor: "transparent"
        });
        $(".container>div> .overlay .right-af").css({
            backgroundColor: "transparent"
        });
        $(".container>div> .overlay .left").css({
            backgroundColor: $(".container").css("backgroundColor")
        });
        $(".container>div> .overlay .left-be").css({
            backgroundColor: $(".container").css("backgroundColor")
        });
    });




    /* end moved*/
    /* start login*/
    /* end login*/
    /* start signup*/

    $(".container .signup .row form .one .row .next button").on("click", function() {
        $(".container .signup .row form .two").css({
            display: "block"
        });
        $(".container .signup .row form .two").siblings("div").css("display", "none");
    });
    $(".container .signup .row form .two .row .next button").on("click", function() {
        $(".container .signup .row form .three").css("display", "block");
        $(".container .signup .row form .three").siblings("div").css("display", "none");
    });
    $(".container .signup .row form .two .row .prev button").on("click", function() {
        $(".container .signup .row form .one").css("display", "block");
        $(".container .signup .row form .one").siblings("div").css("display", "none");
    });
    $(".container .signup .row form .three .row .prev button").on("click", function() {
        $(".container .signup .row form .two").css("display", "block");
        $(".container .signup .row form .two").siblings("div").css("display", "none");
    });
    $(".container .login .row form .row .tomail button").on("click", function() {
        $(".container .signup").css("display", "block");
        $(".container .login").css("display", "none");
    });
    $(".container .signup .row .one .row .tomail button").on("click", function() {
        $(".container .login").css("display", "block");
        $(".container .signup").css("display", "none");
    });
    /* end signup*/

})