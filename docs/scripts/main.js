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
    yoloLabel.innerHTML = "placeholder";
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
        
        e.style.border = `2px solid hsla(${randomHue}, 100%, 60%, 1)`;
        currentLabel.style.backgroundColor = `hsla(${randomHue}, 100%, 60%, 1)`;
        
        currentLabel.style.color = "black";
        
        
    }

    e.onmouseleave = function() {
        currentLabel.style.color = "hsla(200, 100%, 60%, 0)";
        currentLabel.style.backgroundColor = `hsla(0, 100%, 60%, 0)`;
        e.style.border = `2px solid hsla(0, 100%, 60%, 0)`;
    }
}





// for(let i = 0; i < yolo.length; i++) {
//     let e = yolo[i];
//     e.onmouseenter = function(){
//         counter++;
        
//         let randomObj = objects[Math.floor(Math.random()*objects.length)];
        
//         label = document.createElement("h6");
//         label.innerHTML = randomObj;
//         //labelNode = document.createTextNode(randomObj);
//         //console.log(labelNode);
//         //label.appendChild(labelNode);
//         // e.insertBefore(label, e.childNodes[0]);
//         e.insertAdjacentElement("beforebegin", label);

//         label.style.position = "absolute";
//         label.style.top = "-2px";

//         e.style.border = "2px solid blue";     
//         console.log(e);
//     }

//     if(counter > 1) {
//         console.log("counter");
//         e.onmouseleave = function() {
//             e.style.border = "2px solid white";
//             e.parentElement.removeChild(e.parentElement.childNodes[counter+1]);
//             counter--;
//         } 
//     } else {
//         e.onmouseleave = function() {
//             e.style.border = "2px solid white";
//             e.parentElement.removeChild(e.parentElement.childNodes[0]);
//             counter--;
//         }
//     }
// }