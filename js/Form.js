class Form {

  constructor() {
    this.title = createElement('h3');
    this.startbtn = createImg('images/start.gif');
    this.nextbtn = createImg('images/next.gif');
    this.house = createImg('images/storybg.png');
    this.txt1 = createElement('p');
    this.txt2 = createElement('p');
    this.txt3 = createElement('p');
    this.txt4 = createElement('p');
    this.txt5 = createElement('p');
    this.howtoplay = createImg('images/howtoplay.png');
    this.rule1 = createElement('p');
    this.rule2 = createElement('p');
    this.rule3 = createElement('p');
    this.rule4 = createElement('p');
    this.playbtn = createImg('images/playbtn.gif')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  start_screen(){
    this.title.html("Healthy Runner");
    this.title.position(displayWidth/3,30);
    this.title.style("font-size","50px");
    this.title.style("color","red");

    this.startbtn.position(displayWidth/3+60,130);
    this.startbtn.mouseClicked(()=>{
      gameState = 'story'
    });
    this.nextbtn.hide();
    this.house.hide();
    this.howtoplay.hide();
    this.playbtn.hide();
  }

  story_screen(){
    this.startbtn.hide();
    this.howtoplay.hide();
    this.nextbtn.show();
    this.nextbtn.position(displayWidth/2+100,displayHeight/2-50);
    this.nextbtn.size(100,100);

    this.house.show();
    this.title.hide();
    this.house.position(displayWidth/4-60,displayHeight/3-15);
    this.house.size(200,200);

    this.txt1.html("There is a sweet family in a town Swamys.");
    this.txt1.position(displayWidth/4-50,40);
    this.txt1.style("font-size","20px");
    this.txt1.style("font-weight","bold");

    this.txt2.html("Mrs.Swamy is worried for Yashraj's health.");
    this.txt2.position(displayWidth/4-50,70);
    this.txt2.style("font-size","20px");
    this.txt2.style("font-weight","bold");

    this.txt3.html("To incoparate healthy habits she has sent her Yashraj to the market.");
    this.txt3.position(displayWidth/4-50,100);
    this.txt3.style("font-size","20px");
    this.txt3.style("font-weight","bold");

    this.txt4.html("More the healthy food Yashraj will collect more the rewards he will get.");
    this.txt4.position(displayWidth/4-50,130);
    this.txt4.style("font-size","20px");
    this.txt4.style("font-weight","bold");

    this.txt5.html("Help him to become healthy and earn rewards.");
    this.txt5.position(displayWidth/3,200);
    this.txt5.style("font-size","23px");
    this.txt5.style("font-weight","bold");
    this.txt5.style("color","purple");
    this.playbtn.hide();

    this.nextbtn.mouseClicked(()=>{
      gameState = 'rules'
    });
  }

  rules_screen(){
    this.txt1.hide();
    this.txt2.hide();
    this.txt3.hide();
    this.txt4.hide();
    this.txt5.hide();
    this.nextbtn.hide();
    this.house.hide();
    this.howtoplay.show()
    this.howtoplay.position(displayWidth/4,50);
    this.howtoplay.size(150,150);
    this.rule1.html("Collect Fruits And Vegetable To Recieve A Badge!");
    this.rule1.position(displayWidth/3+50,100);
    this.rule1.style("font-size","20px");
    this.rule1.style("font-weight","bold");
    this.rule1.style("color","white");
    this.playbtn.show();
    this.playbtn.position(displayWidth/3+100,displayHeight/2);
    this.playbtn.size(150,50);
    this.playbtn.mouseClicked(()=>{
      gameState = 'play'
    });
  }
}
