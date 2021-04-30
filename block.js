class Block{
  constructor(){
      
      }
    
     
    spawnBlocks(){
      if(frameCount% 200 ===0){
          var block = createSprite(displayWidth, 100);
          block.y = rand;
          block.addImage("block", blockImg);
          block.scale = 0.15;
          block.velocityX = -3;
          block.lifetime = 600;
          blockGroup.add(block);
      }
    }
}