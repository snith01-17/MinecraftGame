var coin, coinImg;
var mutton, muttonImg;
var chicken, chickenImg
var block, blockImg;
var steve, steveImg
var muttonImg, mutton;
var chickenImg, chicken;
var ground;
var bgIMG;
var gameState = "play";

//name spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  //loading images
  //coinImg = 
  blockImg = loadImage("mineblock.png");
  bgIMG = loadImage("minecraftg.png");
  blockImg = loadImage("transparentBlock.png");
  muttonImg = loadImage("Mutton.png");
  chickenImg = loadImage("chicken.png");
  
}

function setup() {
    createCanvas(displayWidth-40, displayHeight-90);
    
    //creating the world
    engine = Engine.create();
    world = engine.world;

    //creating the groun
    ground = new Ground(800,780);
   
    //Steve
    steve = createSprite(100,100);

    //creating group
    blockGroup = new Group();
  }
  
  function draw() {
    Engine.update(engine);
    background(bgIMG);

    ground.display();
    steve.collide(ground);


    //Random numbers for blocks and coins respectively
    rand = Math.round(random(250,380));
    coinrand = rand - 60;

    if(gameState === "play"){
      
    //creating blocks
    block = new Block();
    block.spawnBlocks();
    blockGroup.add(block);

    //creating coins
    coin = new Coin();
    coin.display();

    //creating meat
    meat = new Meat();
    meat.display();

    if(keyDown("space")){
      steve.velocityY = -6;
      //sound
    }
    
    //gravity
    steve.velocityY = steve.velocityY+0.5;

    //Collision with Blocks
    steve.collide(blockGroup);
  }
    
    if(gameState === "end"){
      
    }
    
    
  
    /*creating steve
    steve = new Steve(200,200);
    steve.display();*/

    drawSprites();
  }