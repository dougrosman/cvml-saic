$(document).ready(function(){

    let active = false;

    if(typeof(window.orientation)=="undefined") {
        $("img").click(toggleImageModal);
        $(".modal-background").click(toggleModalOff);

        $("body").keydown("esc", function() {
            if(event.which == 27 && active){
                toggleModalOff();
            }
        });
        $(window).scroll(function(){
            if(active){
                toggleModalOff();
            }
        })
    }
    function toggleImageModal(){
        if(!active){
            $(this).css("position", "fixed").css("z-index", "6").css("transform", "translate(-50%, -50%) scale(1.3)");
            $(".modal-background").toggle();
            active = !active;
        } else {
            toggleModalOff();
        }
    }
    function toggleModalOff(){
        $("img").css("position", "static").css("z-index", "0").css("transform", "translate(0,0) scale(1)");
        $(".modal-background").toggle();
        active = !active;
    }

})