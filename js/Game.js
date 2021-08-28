
function game(){
  market.velocityX = -6
  if(market.x < 0){
    market.x = market.width/2
  }
  console.log(boy.y)
  if(keyDown('space') && boy.y >= 327){
    boy.velocityY = -12
  }
  boy.velocityY = boy.velocityY + 0.4
  boy.collide(invisground)
}