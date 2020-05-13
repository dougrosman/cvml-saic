let textString = "this is some text";
let char;

let characters = [];
let x = 14;

function setup() {
  createCanvas(400, 400);

  for(let c of textString) {
    
    let newC = new Character(c, x, random(80));
    
    characters.push(newC);
    x+=20;
  }
}

function draw() {
  background(220);
  
  for(let c of characters) {
    
   text(c.c, c.x, c.y);
    
    c.y++;
    
    if(c.y > height/2) {
     c.y = height/2; 
    }
    
    if(c.y > height) {
     c.y = 0; 
    }
    
  }
  
  for(let i = 0; i < characters.length; i++) {
    
   text(characters[i].c, characters[i].x , characters[i].y);  
  }
  
}



class Character {
  
  constructor(_c, _x, _y) {
    
    this.x = _x;
    this.y = _y;
    this.c = _c;
    
  }  
}