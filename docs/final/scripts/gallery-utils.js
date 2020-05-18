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
        // $(window).scroll(function(){
        //     if(active){
        //         toggleModalOff();
        //     }
        // })
    }
    function toggleImageModal(){
        if(!active){
            let ratio = scaleImage($(this));
            console.log(ratio);
            $(this).css("position", "fixed").css("z-index", "6").css("transform", `translate(-50%, -50%) scale(${ratio})`);
            $(".modal-background").toggle();
            active = !active;
        } else {
            toggleModalOff();
        }
    }
    function toggleModalOff(){
        
        $("img").css("position", "static").css("z-index", "0").css("transform", `translate(0,0) scale(1)`);
        $(".modal-background").toggle();
        active = !active;
    }


    function scaleImage(image) {
        let w = image[0].width;
        let h = image[0].height;
        let _ratio;
        if(w > h) {
            _ratio = window.innerWidth/w;
        } else if(h < w) {
            _ratio = window.innerHeight/h;
        } else {
            if(window.innerHeight > window.innerWidth) {
                
                _ratio = window.innerWidth/w;
            } else {
                _ratio = window.innerHeight/h;
            }
        }
        return _ratio*.92;
    }
})