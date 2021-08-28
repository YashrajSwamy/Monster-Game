var canvas, backgroundImage;

var gameState = 'start';
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form;


function preload(){
  screen1Bg = loadImage('images/bg.jpg');
  storyBg = loadImage('images/startbg2.jpg');
  howtopBg = loadImage('images/howtoplaybg.jpg');
  marketbg = loadImage('images/marketbg.jpg');
}

function setup(){
  canvas = createCanvas(displayWidth/2, displayHeight/2);
  canvas.position(displayWidth/5,50);
  form = new Form();

  market = createSprite(displayWidth/4,displayHeight/4,displayWidth/2,displayHeight/2);
  console.log(displayWidth/2,displayHeight/2);
  market.addImage(marketbg);

  boy = createSprite(displayWidth/4-200,displayHeight/2);

  invisground = createSprite(displayWidth/4,displayHeight/2,displayWidth/2,10);
}


function draw(){
  if(gameState === 'start'){
    clear();
    background(screen1Bg);
    form.start_screen();

  }
  if(gameState === 'story'){
    clear();
    background(storyBg);
    form.story_screen();
  }
  if(gameState === 'rules'){
    clear();
    background(howtopBg);
    form.rules_screen();
  }
  if(gameState === 'play'){
    clear();
    form.playbtn.hide();
    form.howtoplay.hide();
    form.rule1.hide();
    form.rule2.hide();
    form.rule3.hide();
    form.rule4.hide();
    background(marketbg);

    game();
    drawSprites();
  }
}
