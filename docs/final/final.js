$(document).ready(function() {


    
    // add hover overlays to main menu cards, using the alt
    // text as the overlay text
    let imageCards = $(".image-card").children(".main-image");
    $(".image-card").append(`<div class="overlay"></div>`);
    let overlays = $(".overlay");
    for(let i = 0; i < imageCards.length; i++) {
        let name = imageCards[i].alt;
        overlays[i].innerHTML = name;
    }

    // toggle hamburger menu on mobile devices
    $(".hamburger").click(function(){
        $(".main-menu").toggle();
    })

    $(".main-image").css("height", `${$(".main-image").css("width")}`)

    $(window).resize(function(){
        $(".main-image").css("height", `${$(".main-image").css("width")}`)
    })



    let infoActive;

    // get the height of the info box before reducing it to 0.
    let instructionsHeight = $(".instructions").css("height");

    $(".instructions").css("height", "0").css("opacity", "1");

    // toggle animating revealing the info box.
    $(".info").click(function(){
        if(infoActive){
            hideInfo();
        } else {
            revealInfo();
        }
    });

    // $(".screen-lock").click(function(){
    //     $(".info").toggle();
    //   })

    function revealInfo() {
        let scrollVal = $(window).scrollTop();
        $(".instructions").show().css("top", scrollVal+30).animate({
            height: instructionsHeight
        }, 300);
        infoActive = true;
    }

    function hideInfo() {
        $(".instructions").animate({
            height: "0px"
        }, 200, toggleInstructions);
        infoActive = false;
    }

    function toggleInstructions() {
        $(".instructions").toggle();
    }

    // toggle mute

    
    
 // let images=$(".main-image");
    // let i = 0;

    // $(".main-link").hover(function(){
        
    //     i = $(this).index();
    //     // images[i].style = "transform: scale(2)";

    // }, function(){
    //     // images[i].style = "transform: scale(1)";
        
        
    // })

})