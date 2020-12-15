var gameState = 0;
var dog, dogImage;
var food, foodImage;
var database, position;
var foodStock, lastFed;

function preload(){     
  dogImage = loadImage("images/dogimg1.png");
  foodImag = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,5,5);
  dog.scale = 0.3;
  database = firebase.database();
  position = database.ref("dog/pos");

  food = createSprite(200,200,5,5);
  database = firebase.database();
  position = database.ref("food/pos");

  position.on("value",readPosition,showError);
  console.log(database);
  
}


function draw() {  
  background(46,139,87);
  if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      changePosition(0,+1);
  }
   dog.addImage("dogImage",dogImage);
   food.addImage("foodImage",foodImage);

  drawSprites();
}

function changePosition(ofsetx,ofsety){
  database.ref("dog/pos").set(
      {
          x:dog.x + ofsetx, 
          y:dog.y + ofsety,
      }
  )
}

function readPosition(data){
  var dogPosition = data.val();
  dog.x = dogPosition.x;
  dog.y = dogPosition.y;
  console.log("readPosition" + dogPosition);
}
function showError(){
  console.log("database readError");
}