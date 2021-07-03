var bgImg, bg;
var superHero, heroImg;
var edges;
var dragon, dragonImg;
var monster, monsterImg;
var cloud1, cloud2, cloud3;

function preload() {

  bgImg = loadImage("sky.jpeg");
  heroImg = loadImage("Superhero.png");
  dragonImg = loadAnimation("dragonImg.gif")
  monsterImg = loadImage("monster.png");
  cloud1 = loadImage("Cloud1.png");
  cloud2 = loadImage("Cloud2.png");
  cloud3 = loadImage("cloud3.png");
}



function setup() {

  createCanvas(800, 400)

  bg = createSprite(750, 200);
  bg.addImage(bgImg)
  bg.scale = 0.9;
  bg.velocityX = -3;

  superHero = createSprite(500, 200);
  superHero.addImage(heroImg);
  superHero.scale = 0.2;

  edges = createEdgeSprites();

  monster = createSprite(200, 170);
  monster.addImage(monsterImg);
  monster.scale = 0.38;
}

function draw() {
  background(0)

  if (bg.x < 0) {
    bg.x = 750;
  }

  if (keyDown("UP_ARROW")) {
    superHero.y -= 5;
  }
  if (keyDown("DOWN_ARROW")) {
    superHero.y += 5;
  }
  superHero.collide(edges);

  spawnClouds();

  drawSprites();
}
function spawnClouds(){
if(frameCount % 100 === 0){
  cloud = createSprite(850,Math.round(random(50,300)))  
  
  var rand= Math.round(random(1,3))
  switch(rand){
    case 1 : cloud.addImage(cloud1)
      cloud.scale= 0.1
            break;
    case 2 : cloud.addImage(cloud2)
      cloud.scale= 0.25
            break;
    case 3 : cloud.addImage(cloud3)
      cloud.scale= 0.1
            break;
  }
  cloud.velocityX= -3;
  superHero.depth= cloud.depth+1;
  monster.depth= cloud.depth+1;
}


}
