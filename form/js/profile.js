$(document).ready(function () {
    var x = " "
    $("form input").on("focus", function () {
        x = $(this).attr("placeholder")
        $(this).attr("placeholder", " ")
    });
    $("form input").on("blur", function () {

        $(this).attr("placeholder", x)
    });
    $(".container section:first-of-type .row .photo").on("mouseenter", function () {
        $(".container section:first-of-type .row .photo>span").css("color", "#239e54")
    });
    $(" .container section:first-of-type .row .cv").on("mouseenter", function () {
        $(".container section:first-of-type .row .cv>span").css("color", "#239e54")
    });
    $(".container section:first-of-type .row .photo").on("mouseleave", function () {
        $(".container section:first-of-type .row .photo>span").css("color", "#fff")
    });    $(".container section:first-of-type .row .cv").on("mouseleave", function () {
        $(".container section:first-of-type .row .cv>span").css("color", "#fff")
    });
    $('.timer').countTo();

})