var canvas, backgroundImage;

var gameState = 'start';
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form;


function preload(){
  screen1Bg = loadImage('images/screen-1.png')
}

function setup(){
  canvas = createCanvas(displayWidth/2, displayHeight/2);
  canvas.position(displayWidth/5,50);
  database = firebase.database();
  form = new Form();
}


function draw(){
  if(gameState === 'start'){
    clear();
    background(screen1Bg);
    form.start_screen();

  }
}
