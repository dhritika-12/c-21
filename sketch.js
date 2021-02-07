
var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4, gameObject5, gameObject6;

function setup() {
  createCanvas(1000,1000);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.debug = true;
  fixedRect.shapeColor='red';

  movingRect = createSprite(400,200,80,100);
  movingRect.debug = true;

  movingRect.shapeColor= 'red';
  //movingRect1 = createSprite(100,200,50,100);
  //movingRect1.debug = true;
   gameObject1= createSprite(100,100,50,50);
   gameObject1.shapeColor='red';
   gameObject1.debug = true;
   
   gameObject2= createSprite(200,100,50,50);
   gameObject2.shapeColor='red';
   gameObject2.debug = true;

   gameObject3= createSprite(300,100,50,50);
   gameObject3.shapeColor='red';
   gameObject3.debug = true;

   gameObject4= createSprite(400,100,50,50);
   gameObject4.shapeColor='red';
   gameObject4.debug = true;


   gameObject5= createSprite(100,650,50,50);
   gameObject5.shapeColor= 'red';
   gameObject5.debug=true;
   gameObject5.velocityX= 5;

   gameObject6= createSprite(800,650,50,50);
   gameObject6.shapeColor='red';
   gameObject6.debug=true;
   gameObject6.velocityX=-5;


}

function draw() {
  background(255,255,255);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

 
 isTouching(movingRect, gameObject4);
 bounceOff(gameObject5, gameObject6);
  console.log(movingRect.x - fixedRect.x);
  drawSprites();
}


