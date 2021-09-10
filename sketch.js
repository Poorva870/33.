var snow, snowImage; 
var ground, groundImage; 

function preload() { 
  groundImage = loadImage("snow3.jpg");
  snowImage = loadImage("snow5.webp"); 
} 

function setup() {
   createCanvas(1000, 800); 

   ground = createSprite(510, 300, 1000, 800); 
   ground.addImage("ground1", groundImage); 

   snow = createSprite(400, 150, 800, 400); 
   snow.addImage("snow1", snowImage); 
   snow.scale = 0.25; 
}
    
function draw() {
  // background(groundImage);
   drawSprites(); 
  }