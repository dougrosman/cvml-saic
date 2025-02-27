$(document).ready(function(){

    let active = false;

    //if(typeof(window.orientation)=="undefined") {
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
    //}
    function toggleImageModal(){
        if(!active){
            let ratio = scaleImage($(this));
            // console.log(ratio);
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
        // let w = image[0].width;
        // let h = image[0].height;
        let w = 512;
        let h = 512;

        console.log("width: " + w);
        console.log("height: " + h);
        let _ratio = 1;
        if(w > h) {
            _ratio = window.innerHeight/h;
        } else if(h < w) {
            _ratio = window.innerWidth/w;
        } else {
            if(window.innerHeight > window.innerWidth) {
                _ratio = window.innerWidth/w;
            } else {
                _ratio = window.innerHeight/h;
            }
        }
        if(typeof(window.orientation)=="undefined") {
            if(image[0].height > image[0].width) {
                return _ratio*0.7;
            } else {
                return _ratio*.95;
            }
        } else {
            return _ratio*1.25;
        }
    }

    let footerCSS = {
        position: "relative",
        bottom: "5px",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: "100",
        textAlign: "center",
        fontSize: ".65rem"
    }

    // footer
    $("body").append("<footer><p>© Doug Rosman 2020</p></footer>");
    $("footer").css(footerCSS);
})