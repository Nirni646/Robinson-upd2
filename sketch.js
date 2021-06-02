var creature1Img,creature2Img,creature3Img,creature4Img,creatureGroup,creature;
var creature1,creature2,creature3,creature4;
var Man,ManAnimation;
var ground;
var bgImg,bg;
var score;
var natureS,nature;

function preload() {
    creature1Img = loadImage("Images/creature1.png");
    creature2Img = loadImage("Images/creature1.png");
    creature3Img = loadImage("Images/creature1.png");
    creature4Img = loadImage("Images/creature1.png");

    bgImg = loadImage("Images/bg.jpg");

    natureS = loadSound("nature.mp3")

    ManAnimation = loadAnimation("Images/Man1.png","Images/Man2.png","Images/Man3.png","Images/Man4.png","Images/Man5.png","Images/Man6.png","Images/Man7.png","Images/Man8.png","Images/Man9.png","Images/Man10.png","Images/Man11.png","Images/Man12.png","Images/Man13.png","Images/Man14.png","Images/Man15.png","Images/Man16.png","Images/Man17.png","Images/Man18.png","Images/Man19.png","Images/Man20.png","Images/Man21.png","Images/Man22.png","Images/Man23.png","Images/Man24.png");
}
function setup(){
    createCanvas(800,600);

    creature1 = createSprite();
    creature1.addImage("creature1",creature1Img);
    creature2 = createSprite();
    creature2.addImage("creature2",creature2Img);
    creature3 = createSprite();
    creature3.addImage("creature3",creature3Img);
    creature4 = createSprite();
    creature4.addImage("creature4",creature4Img);

    
    bg = createSprite(400,10,1200,600)
    bg.addImage("bg",bgImg);
    bg.scale = 1 ;
    bg.velocityX = -5;

    Man = createSprite(100,500,20,20);
    Man.addAnimation("Man",ManAnimation);
    Man.scale = 0.4;
    
    ground = createSprite(400,580,1200,10);
    ground.velocityX = -5;
    ground.visible = false;

}
function draw(){
    background("lightblue");
    score = frameCount;

    if(bg.x < 0){
       bg.x = bg.width/2;
    }
    if(ground.x < 0){
        ground.x = ground.width/2;
     }

    if(keyDown("space")){
        Man.velocityY = -10;
    }
    Man.velocityY += 0.8
    Man.collide(ground); 

    if (score % 500 === 0){
        ground.velocityX += -5                   ;
        bg.velocityX += -5
        creature.velocityX += -5;
    }
    
    spawnCreature();
    drawSprites();
    textSize(20);
    fill("red");
    text("score "+ score,40,40);
}
function spawnCreature(){
    if(frameCount % 300 === 0){
        creature = createSprite(780,499,20,20);
        creature.velocityX = -5;
        creature.scale = 0.15;

        var num = Math.round(random(1,4));
        switch(num){
            case 1 : creature.addImage("creature1",creature1Img);
            break;
            case 2 : creature.addImage("creature2",creature2Img);
            break;
            case 3 : creature.addImage("creature3",creature3Img);
            break;
            case 4 : creature.addImage("creature4",creature4Img);
            break;
            default : break;
        }
    } 

}