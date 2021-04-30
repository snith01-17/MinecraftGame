class Coin{
    constructor(){

    }

    display(){
      if(frameCount % 400 === 0){
         coin = createSprite(displayWidth, 100, 20, 20);
         coin.y = coinrand;
         //coin.addImage(createImg("coins.gif"));
         coin.velocityX = -3;
         coin.lifetime = 600;
        }

    }
}