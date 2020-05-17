$(document).ready(function(){

    let active = false;

    if(typeof(window.orientation)=="undefined") {
        $("img").click(toggleImageModal);
        $(".modal-background").click(toggleBackgroundModal);
    }

    function toggleImageModal(){
        if(!active){
            $(this).css("position", "fixed").css("z-index", "6").css("transform", "translate(-50%, -50%) scale(1.3)");
            $(".modal-background").toggle();
            active = !active;
        } else {
            $("img").css("position", "static").css("z-index", "0").css("transform", "translate(0,0) scale(1)");
            $(".modal-background").toggle();
            active = !active;
        }
    }


    function toggleBackgroundModal(){
        $("img").css("position", "static").css("z-index", "0").css("transform", "translate(0,0) scale(1)");
            $(".modal-background").toggle();
            active = !active;
    }

})