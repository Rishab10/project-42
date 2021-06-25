var iss,bg,sc1,sc2,sc3,sc4;
var issImg;
var spaceCraft;
var hasDocked = false;



function preLoad(){
issImg = loadImage("iss.png");
bg = loadImage("spacebg.jpg");
sc1 = loadImage("spacecraft1.png");
sc2 = loadImage("spacecraft2.png");
sc3 = loadImage("spacecraft3.png");
sc4 = loadImage("spacecraft4.png");

}






function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(sc1);

  iss = createSprite(330,130);
  iss.addImage(issImg);
}

function draw() {
  background(bg);
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1);

    if (keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y-2;

    }
    if(keyDown("LEFT_ARROW")){
       spacecraft.addImage(scimg3);
        spacecraft.x = spacecraft.x - 1;
       } 
       
       if(keyDown("RIGHT_ARROW")){
          spacecraft.addImage(scimg2);
           spacecraft.x = spacecraft.x + 1;
           } if(keyDown("DOWN_ARROW")){ 
             spacecraft.addImage(scimg1);
             } } 
             
             if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
                hasDocked = true; textSize(25); fill("white")
                 text("Docking Successful!", 200, 300);
                 } drawSprites(); }

 