$(document).ready(function() {

    let active = false;
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
    $(".patties").click(function(){
        $(".site-title").toggle();
        $(".site-subtitle").toggle();
        $(".instructor").toggle();
        $(".about").toggle();
        $(".main-content").toggle();
        $(".main-menu").toggle();
        $(".menu-background").toggle();
        // if(window.orientation==0)
        // {
        //     $(window).scrollTop(250);
        // }
            
    })

    // Create square thumbnails for non-square images on page resize

    // $(".main-image").css("height", `${$(".main-image").css("width")}`)

    // $(window).resize(function(){
    //     $(".main-image").css("height", `${$(".main-image").css("width")}`)
    // })
})