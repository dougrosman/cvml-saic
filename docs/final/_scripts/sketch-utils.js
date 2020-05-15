$(document).ready(function() {

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
})