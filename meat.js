class Meat{
    constructor(){

    }

    display(){
      if(frameCount % 1000 === 0){
         meat = createSprite(displayWidth, 100, 20, 20);
         meat.y = coinrand;
         meat.shapeColor = "red";
         //addImage
         meat.velocityX = -3;
         

         var rand = Math.round(random(1,2));
         switch(rand){
             case 1: meat.addImage(muttonImg);
                    break;
             case 2: meat.addImage(chickenImg);
                   break;
            default: break;
         }
         meat.scale = 0.1;
         meat.lifetime = 600;
         
        }

    }
}
