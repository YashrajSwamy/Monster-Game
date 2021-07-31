class Form {

  constructor() {
    this.monsterwel = createImg('images/welcome-monster.gif');
    this.startbtn = createImg('images/startbtn.png');
    this.title = createElement()
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  start_screen(){
    this.monsterwel.position(255,245);
    this.monsterwel.size(200,200);
    this.startbtn.position(800,250);
    this.startbtn.size(150,70);
    this.title.html("Monster Game");
    this.title.position(displayWidth/2 - 50, 0);
    //will be adding style to title soon..
  }


}
