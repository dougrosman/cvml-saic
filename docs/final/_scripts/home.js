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

    // Create square thumbnails for non-square images on page resize

    // $(".main-image").css("height", `${$(".main-image").css("width")}`)

    // $(window).resize(function(){
    //     $(".main-image").css("height", `${$(".main-image").css("width")}`)
    // })
})