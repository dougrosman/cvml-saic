$(document).ready(function() {

    $(".hamburger").click(function(){
        $(".main-menu").toggle();
    })

    $(".main-image").css("height", `${$(".main-image").css("width")}`)

    $(window).resize(function(){
        $(".main-image").css("height", `${$(".main-image").css("width")}`)
    })


    // let images=$(".main-image");
    // let i = 0;

    // $(".main-link").hover(function(){
        
    //     i = $(this).index();
    //     // images[i].style = "transform: scale(2)";

    // }, function(){
    //     // images[i].style = "transform: scale(1)";
        
        
    // })


    


})