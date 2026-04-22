$(document).ready(function(){
    $("#whiteBTN").hover(function(){
        $(".mainSlide").slideToggle("veryslow");
        $(".buttonImg").slideToggle("veryslow");
    });
});

$(document).ready(function(){
    $("#blueBTN").hover(function(){
        $(".blueSlide").slideToggle("veryslow");
        $(".mainSlide").slideToggle("veryslow");
        $(".buttonImg").slideToggle("veryslow");
        $(".greenSlide").slideToggle("veryslow");
        $(".pinkSlide").slideToggle("veryslow");
        $(".yellowSlide").slideToggle("veryslow");
    });
});

$(document).ready(function(){
    $("#greenBTN").hover(function(){
        $(".greenSlide").slideToggle("veryslow");
        $("#img-green").slideToggle("veryslow");
        $("#img-green2").slideToggle("veryslow");
    });
});

$(document).ready(function(){
    $("#pinkBTN").hover(function(){
        $(".pinkSlide").slideToggle("veryslow");
        $("#img-pink").slideToggle("veryslow");
    });
});

$(document).ready(function(){
    $("#yellowBTN").hover(function(){
        $(".yellowSlide").slideToggle("veryslow");
        $("#img-yellow").slideToggle("veryslow");
        $("#img-blue").slideToggle("veryslow");
    });
});