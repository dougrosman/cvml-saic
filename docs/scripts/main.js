let hamburger = document.getElementById("hamburger");

let objects = ["cat", "dog", "fish", "horse", "cow", "lion", "monkey", "frog"];

let hueValues = [];
for(let i = 0; i < 360; i+=60) {
    hueValues.push(i);
}

let yolo = document.getElementsByClassName("yolo");

console.log(yolo);


for(let i = 0; i < yolo.length; i++) {
    let e = yolo[i];
    let yoloLabel = document.createElement("h6");
    let randomIndex = Math.floor(Math.random()*(splitLabels.length));
    console.log(splitLabels.length);
    yoloLabel.innerHTML = splitLabels[randomIndex];
    yoloLabel.classList.add("yolo-style");
    e.insertAdjacentElement("beforebegin", yoloLabel);
    
    // yoloLabel.style.position = "relative";
    // yoloLabel.style.top = "0px";
}
let yoloStyle = document.getElementsByClassName("yolo-style");
for(let i = 0; i < yolo.length; i++) {
    let e = yolo[i];
    let currentLabel = yoloStyle[i];
    //console.log(e.parentNode.childNodes[1]);
    e.onmouseenter = function(){
        let randomHue = hueValues[Math.floor(Math.random()*hueValues.length)];
        
        e.style.border = `3px solid hsla(${randomHue}, 100%, 70%, 1)`;
        currentLabel.style.backgroundColor = `hsla(${randomHue}, 100%, 70%, 1)`;
        
        currentLabel.style.color = "black";
        randomIndex = Math.floor(Math.random()*(splitLabels.length));
        currentLabel.innerHTML = splitLabels[randomIndex]; 
    }

    e.onmouseleave = function() {
        currentLabel.style.color = "hsla(200, 100%, 60%, 0)";
        currentLabel.style.backgroundColor = `hsla(0, 100%, 60%, 0)`;
        e.style.border = `3px solid hsla(0, 100%, 60%, 0)`;
    }
}

let backToTop = document.createElement("div");

backToTop.innerHTML = "⇧";
backToTop.classList.add("backToTop");
document.body.appendChild(backToTop);

let btt = document.querySelector('.backToTop');

btt.addEventListener('click', function(){
    window.scrollTo(0, 0);

});


window.onload = function(){

    console.log("asdfasdfasdfasdf")
    document.querySelector("#right-container").querySelector(".page-content").scrollTo(0, 10000);
};