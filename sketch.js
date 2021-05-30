var robin, robinIdle, robin_running, robin_slide, robin_RIP;

var ground, invisibleGround, groundImage, cloud, cloudImages, hurdle, hurdleImages1, hurdleImages2, hurdleImages3, hurdleImages4;

var GroupClouds, GroupHurdles, GroupObstacles, GroupGhost, GroupGhostObs, GroupStar, GroupThunder, GroupRain, GroupCreatures, ALLGroups;

var gameOver, gameOverImage, restart, restartImage;

var backgroundImg;

var BGM;

var die, jump, check, sliding, raining, wolfHowl, wind, sunny, thunderStr;

var SERVE = 2;
var PLAY = 1;
var END = 0;
var gameState = SERVE;

var All;

var Sun, animateSun;

var Moon, moonImage;

var obstacle, animateObs, animateSpin, animateObstacle;

var transGhost, ghostImage1, ghostImage2;

var ghostObs, animateGhost1, animateGhost2, animateGhost3, ghostIdle1, ghostIdle2;

var creatureObs, animateCreature1, animateCreature2, animateCreature3, creatureImage1, creatureImage2;

var drop = [];
var dropImage;

var thunder, thunderImage1, thunderImage2, thunderImage3, thunderImage4;

var star = [];
var starImage;

var score = 0;

localStorage["HighestScore"] = 0;

var sec;

var backgroundImg, bg;

let classifier;

function preload() {
  backgroundImg = loadImage("Sprites/backgroundImg.png");

  robinIdle = loadAnimation("Sprites/Robin/robinRun/robinRun1.png");
  
  robin_running = loadAnimation("Sprites/Robin/robinRun/robinRun1.png", "Sprites/Robin/robinRun/robinRun2.png", "Sprites/Robin/robinRun/robinRun3.png", "Sprites/Robin/robinRun/robinRun4.png", "Sprites/Robin/robinRun/robinRun4.png", "Sprites/Robin/robinRun/robinRun5.png", "Sprites/Robin/robinRun/robinRun6.png", "Sprites/Robin/robinRun/robinRun7.png", "Sprites/Robin/robinRun/robinRun8.png", "Sprites/Robin/robinRun/robinRun9.png", "Sprites/Robin/robinRun/robinRun10.png", "Sprites/Robin/robinRun/robinRun11.png", "Sprites/Robin/robinRun/robinRun12.png");

  robin_slide = loadImage("Sprites/Robin/robinSlide/robinSlide.png");

  robin_RIP = loadImage("Sprites/Robin/robinRIP/robinRIP.png");

  groundImage = loadImage("Sprites/ground.png");

  animateSpin = loadAnimation("Sprites/Spinner/Spinner1.png","Sprites/Spinner/Spinner2.png","Sprites/Spinner/Spinner3.png","Sprites/Spinner/Spinner4.png","Sprites/Spinner/Spinner5.png");

  animateObs = loadAnimation("Sprites/Obstacles/Obs1.png","Sprites/Obstacles/Obs2.png","Sprites/Obstacles/Obs3.png","Sprites/Obstacles/Obs4.png","Sprites/Obstacles/Obs5.png");

  animateObstacle = loadAnimation("Sprites/Obstacles/Obstacle1.png", "Sprites/Obstacles/Obstacle2.png", "Sprites/Obstacles/Obstacle3.png", "Sprites/Obstacles/Obstacle4.png", "Sprites/Obstacles/Obstacle5.png", "Sprites/Obstacles/Obstacle6.png", "Sprites/Obstacles/Obstacle7.png", "Sprites/Obstacles/Obstacle8.png", "Sprites/Obstacles/Obstacle9.png", "Sprites/Obstacles/Obstacle10.png");

  animateSun = loadAnimation("Sprites/Sun/Sun1.png", "Sprites/Sun/Sun2.png", "Sprites/Sun/Sun3.png", "Sprites/Sun/Sun4.png", "Sprites/Sun/Sun5.png");

  moonImage = loadImage("Sprites/Moon.png");

  cloudImages = loadImage("Sprites/cloud.png");

  dropImage = loadImage("Sprites/Drop.png");

  thunderImage1 = loadImage("Sprites/Lightning/1.png");

  thunderImage2 = loadImage("Sprites/Lightning/2.png");

  thunderImage3 = loadImage("Sprites/Lightning/3.png");

  thunderImage4 = loadImage("Sprites/Lightning/4.png");

  starImage = loadImage("Sprites/Star.png");

  hurdleImages1 = loadImage("Sprites/Hurdles/Hurdles1.png");

  hurdleImages2 = loadImage("Sprites/Hurdles/Hurdles2.png");

  hurdleImages3 = loadImage("Sprites/Hurdles/Hurdles3.png");

  hurdleImages4 = loadImage("Sprites/Hurdles/Hurdles4.png");

  ghostImage1 = loadImage("Sprites/Ghosts/transparentGhost1.png");

  ghostImage2 = loadImage("Sprites/Ghosts/transparentGhost2.png");

  animateGhost1 = loadAnimation("Sprites/Ghosts/Ghost1Frame1.png", "Sprites/Ghosts/Ghost1Frame2.png", "Sprites/Ghosts/Ghost1Frame3.png", "Sprites/Ghosts/Ghost1Frame4.png");

  animateGhost2 = loadImage("Sprites/Ghosts/Ghost2.png");

  animateGhost3 = loadAnimation("Sprites/Ghosts/Ghost3Frame1.png", "Sprites/Ghosts/Ghost3Frame2.png", "Sprites/Ghosts/Ghost3Frame3.png", "Sprites/Ghosts/Ghost3Frame4.png", "Sprites/Ghosts/Ghost3Frame5.png");

  ghostIdle1 = loadAnimation("Sprites/Ghosts/Ghost1Idle.png");

  ghostIdle2 = loadAnimation("Sprites/Ghosts/Ghost2Idle.png");

  animateCreature1 = loadAnimation("Sprites/Robots/Robot1Frame1.png", "Sprites/Robots/Robot1Frame2.png", "Sprites/Robots/Robot1Frame3.png", "Sprites/Robots/Robot1Frame4.png", "Sprites/Robots/Robot1Frame5.png", "Sprites/Robots/Robot1Frame6.png");

  animateCreature2 = loadAnimation("Sprites/Monsters/Mons1Frame1.png", "Sprites/Monsters/Mons1Frame2.png", "Sprites/Monsters/Mons1Frame3.png", "Sprites/Monsters/Mons1Frame4.png", "Sprites/Monsters/Mons1Frame5.png", "Sprites/Monsters/Mons1Frame6.png", "Sprites/Monsters/Mons1Frame7.png", "Sprites/Monsters/Mons1Frame8.png", "Sprites/Monsters/Mons1Frame9.png", "Sprites/Monsters/Mons1Frame10.png", "Sprites/Monsters/Mons1Frame11.png", "Sprites/Monsters/Mons1Frame12.png", "Sprites/Monsters/Mons1Frame13.png");  

  animateCreature3 = loadAnimation("Sprites/Monsters/Mons2Frame1.png", "Sprites/Monsters/Mons2Frame2.png", "Sprites/Monsters/Mons2Frame3.png", "Sprites/Monsters/Mons2Frame4.png", "Sprites/Monsters/Mons2Frame5.png");
  
  creatureImage1 = loadAnimation("Sprites/Robots/Robot1Idle.png");

  creatureImage2 = loadAnimation("Sprites/Monsters/Mons1Idle.png");

  gameOverImage = loadImage("Sprites/gameOver.png");

  restartImage = loadImage("Sprites/restart.png");

  // BGM = loadSound("Assets/BGM.mp3");

  die = loadSound("Assets/die.mp3");

  jump = loadSound("Assets/jump.mp3");

  check = loadSound("Assets/checkPoint.mp3");

  sliding = loadSound("Assets/sliding.mp3");

  raining = loadSound("Assets/rainStart.mp3");

  wolfHowl = loadSound("Assets/wolfHowling.mp3");

  wind = loadSound("Assets/wind.mp3");

  sunny = loadSound("Assets/sunny.mp3");

  thunderStr = loadSound("Assets/thunder.mp3");
  
//   const options = { probabilityThreshold: 0.95 };

//   classifier = ml5.soundClassifier('SpeechCommands18w', options, modelReady);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // console.log(height);

  robin = createSprite(100, height-160, 20, 70);
  robin.setCollider("rectangle",0,0,25,31);
  robin.addAnimation("idle", robinIdle);
  robin.addAnimation("running", robin_running);
  robin.addImage("slide", robin_slide);
  robin.addAnimation("RIP", robin_RIP);
  robin.scale = 1.3;
  robin.debug=false;

  ground = createSprite(width/2, height-80, width, 20);
  ground.addImage("ground", groundImage);
  ground.x = width / 2 - width;
  ground.velocityX = -(3 +  Math.floor(score / 200));

  ground.depth = robin.depth;
  robin.depth = robin.depth+1;

  invisibleGround = createSprite(width/2, height-155, width, 10);
  invisibleGround.visible = false;

  Sun = createSprite(width-50,100,30,30);
  Sun.addAnimation("movingSun", animateSun);
  Sun.scale=0.25;
  Sun.visible=false;

  Moon = createSprite(width-50,100,40,40);
  Moon.addImage(moonImage);
  Moon.scale=0.3;
  Moon.visible=false;
  // Moon.debug=true;
  Moon.setCollider("circle",0,0,150);

  gameOver = createSprite(width/2, height/2-90, 20, 20);
  gameOver.addImage(gameOverImage);
  gameOver.scale = 0.6;
  gameOver.visible = false;

  restart = createSprite(width/2, height/2, 20, 20);
  restart.addImage(restartImage);
  restart.scale = 0.2;
  restart.visible = false;

  GroupClouds = new Group();
  GroupHurdles = new Group();
  GroupObstacles =  new Group();
  GroupGhost = new Group();
  GroupGhostObs = new Group();
  GroupCreatures = new Group();
  GroupStar = new Group();
  GroupThunder = new Group();
  GroupRain = new Group();

  ALLGroups = new Group();
}

// function modelReady() {
//   // classify sound
//   classifier.classify(gotCommands);
// }


function draw() {
  backgroundChanger();

  // console.log(robin.y);

  if(gameState === SERVE) {

    textSize(25);
    fill("blue");
    textStyle(BOLDITALIC);
    text("Press SPACE KEY OR Tap to Jump & Press 'S' Key or Swipe Down to Slide", 60, 220);
    text("Press SPACE KEY OR Tap anywhere on the screen to Start", 60, 270);

    ground.width = width;
    ground.velocityX = 0;

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    GroupHurdles.destroyEach();

    robin.velocityY=0;
    robin.changeAnimation("Idle", robinIdle);
    jump.stop(); 

    $(window).bind("tap", function() {
      gameState = PLAY;
    });

    if(keyWentDown("SPACE") || mousePressedOver()){
      gameState = PLAY;
    }

  } else if (gameState === PLAY) {

    score = score + Math.round(getFrameRate() / 40);

    ground.velocityX = -(3 +  Math.round(score / 200));

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

      if (keyDown(83)) {
        robin.changeImage("slide", robin_slide);
  //       sliding.play();
        invisibleGround.y = height-150;
        robin.y = height-150;
        robin.velocityY=0;

        jump.stop();
      } else{
        // console.log(increm);
        robin.changeAnimation("running", robin_running);
      }
    
    $(window).bind("swipe.down", function() {
      if(frameCount % 50 != 0){
        robin.changeImage("slide", robin_slide);
//         sliding.play();
        invisibleGround.y = height-150;
        robin.y = height-150;
        robin.velocityY=0;
      } else{
        robin.changeAnimation("running", robin_running);
      }
    });

    spawnClouds();
    
    // sec = World.seconds;

    // fill("black");
    // textSize(15);
    // text(`Total Time you had Played : ${Math.floor(sec/60)} min ${sec - Math.floor(sec/60) * 60} sec`, 30, 50);

    if (score > 0 && score % 100 === 0) {
      check.play();
      check.setVolume(0.2);
    }

    if (GroupHurdles.isTouching(robin) || GroupObstacles.isTouching(robin) || GroupGhostObs.isTouching(robin) || GroupCreatures.isTouching(robin) || ALLGroups.isTouching(robin)) {
      die.play();
      die.setVolume(0.2);
      gameState = END;
    }

  } else if (gameState === END) {
    GroupClouds.setVelocityXEach(0);
    GroupHurdles.setVelocityXEach(0);
    GroupObstacles.setVelocityXEach(0);
    GroupGhost.setVelocityXEach(0);
    GroupGhostObs.setVelocityXEach(0);
    GroupCreatures.setVelocityXEach(0);

    ALLGroups.setVelocityXEach(0);
    
    GroupRain.setVelocityYEach(0);
    
    robin.changeAnimation("RIP", robin_RIP);
    ground.velocityX = 0;
    robin.velocityY = 0;

    GroupClouds.setLifetimeEach(-1);
    GroupHurdles.setLifetimeEach(-1);
    GroupObstacles.setLifetimeEach(-1);
    GroupGhost.setLifetimeEach(-1);
    GroupGhostObs.setLifetimeEach(-1);
    GroupCreatures.setLifetimeEach(-1);
    GroupStar.setLifetimeEach(-1);
    GroupThunder.setLifetimeEach(-1);
    GroupRain.setLifetimeEach(-1);

    ALLGroups.setLifetimeEach(-1);

    gameOver.visible = true;
    restart.visible = true;

    if (mousePressedOver(restart) || keyDown("enter") || touches.length>0) {
      reset();
    }
  }

  robin.collide(invisibleGround);

  if (localStorage["HighestScore"] < score) {
    localStorage["HighestScore"] = score;
  }

  fill("#65000A");
  textSize(30);
  textStyle(BOLD);
  text("Score: " + score, width/2, 150);
  text("High Score: " + localStorage["HighestScore"], width/2-250, 150);

  drawSprites();

}

// function gotCommands(error, results) {
//   if (error) {
//     console.error(error);
//   }

//   // console.log(results[0].label, results[0].confidence);
  
//   if(score >= 0 && score < 250 && results[0].label == 'up' && robin.y >= height-180.5){
//     robin.velocityY = -10.5;
//     robin.changeAnimation("running", robin_running);
//     jump.play();
//   }
// }

function backgroundChanger(){
  if(score >= 0 && score < 1000){
    background("white");

    if(gameState === PLAY){
      robin.changeAnimation("running", robin_running);
    } 
    
    //?velocity of Robin
    if (keyDown("space") && robin.y >= height-180.5) {
      robin.velocityY = -10.5;
      robin.changeAnimation("running", robin_running);
      jump.play();
    }

    $(window).bind("tap", function() {
      if(robin.y >= height-180.5){
        robin.velocityY = -10.5;
        robin.changeAnimation("running", robin_running);
        jump.stop();
      }
    });

    robin.velocityY  = robin.velocityY + 0.8;

    spawnhurdles();
  } else if(score >= 1000 && score < 2000){
    background(rgb(141, 163, 153));

    //?velocity of Robin
    if (keyDown("space") && robin.y >= height-180.5) {
      robin.velocityY = -10.5;
      robin.changeAnimation("running", robin_running);
      jump.play();
    }

    $(window).bind("tap", function() {
      if(robin.y >= height-180.5){
        robin.velocityY = -10.5;
        robin.changeAnimation("running", robin_running);
        jump.stop();
      }
    });

    robin.velocityY = robin.velocityY + 0.8;

    // wind.play();

    spawnhurdles();
  } else if(score >= 2000 && score < 3000){
    background(rgb(255, 219, 96));
    //?sun visibility
    Sun.visible=true;

    //velocity of Robin
    if (keyDown("space") && robin.y >= height-180.5) {
      robin.velocityY = -11;
      robin.changeAnimation("running", robin_running);
      jump.play();
    }

    $(window).bind("tap", function() {
      if(robin.y >= height-180.5){
        robin.velocityY = -11;
        robin.changeAnimation("running", robin_running);
        jump.stop();
      }
    });

    robin.velocityY = robin.velocityY + 0.8;

    // sunny.play();

    spawnObstacles();
  } else if(score >=3000 && score < 4000){
    background(rgb(42,42,53));
    //sun visibility
    Sun.visible=false;

    //velocity of Robin
    if (keyDown("space") && robin.y >= height-180.5) {
      robin.velocityY = -11.5;
      robin.changeAnimation("running", robin_running);
      jump.play();
    }

    $(window).bind("tap", function() {
      if(robin.y >= height-180.5){
        robin.velocityY = -11.5;
        robin.changeAnimation("running", robin_running);
        jump.stop();
      }
    });

    robin.velocityY = robin.velocityY + 0.7;

    //visibility
    Moon.visible=true;

    //spawning the effects
    Star();
    TransGhost();

    // wolfHowl.play();

    spawnGhostObs();
  } else if(score >=4000 && score < 5000){
    background(rgb(22, 19, 20));
    
    fill("white");

    //velocity of Robin
    if (keyDown("space") && robin.y >= height-180.5) {
      robin.velocityY = -11.5;
      robin.changeAnimation("running", robin_running);
      jump.play();
    }

    $(window).bind("tap", function() {
      if(robin.y >= height-180.5){
        robin.velocityY = -11.5;
        robin.changeAnimation("running", robin_running);
        jump.stop();
      }
    });

    robin.velocityY = robin.velocityY + 0.8;

    //visibility
    Moon.visible=false;

    //spawing the effect
    // Rain();
    // raining.play();

    thunderBolt();  

    //spawning the creatures
    spawnCreatures();
  } else{
    background(backgroundImg);

    //velocity of Robin
    if (keyDown("space") && robin.y >= height-180.5) {
      robin.velocityY = -11.5;
      robin.changeAnimation("running", robin_running);
      jump.play();
    }

    $(window).bind("tap", function() {
      if(robin.y >= height-180.5){
        robin.velocityY = -11.5;
        robin.changeAnimation("running", robin_running);
        jump.stop();
      }
    });

    robin.velocityY = robin.velocityY + 0.8;

    //spawing all Enemies
    spawnALL();
  }
}

function reset() {
  gameState = PLAY;

  gameOver.visible = false;
  restart.visible = false;
  Sun.visible = false;
  Moon.visible=false;

  GroupClouds.setLifetimeEach(0);
  GroupHurdles.setLifetimeEach(0);
  GroupObstacles.setLifetimeEach(0);
  GroupGhost.setLifetimeEach(0);
  GroupGhostObs.setLifetimeEach(0);
  GroupCreatures.setLifetimeEach(0);
  GroupStar.setLifetimeEach(0);
  GroupThunder.setLifetimeEach(0);
  GroupRain.setLifetimeEach(0);

  ALLGroups.setLifetimeEach(0);

  robin.changeAnimation("running", robin_running);

  score = score;

  sec = 0;
}

function spawnClouds() {
  if(gameState === END){
    return;
  } else if (frameCount % 40 === 0) {
      cloud = createSprite(width, 0, 40, 10);
      cloud.y = random(200, height-300);
      cloud.addImage("cloud", cloudImages);
      cloud.scale = 0.5;
      cloud.velocityX = -(3 + Math.floor(score / 100));

      //assign lifetime to the variable
      cloud.lifetime = 180;

      //adjust the depth
      cloud.depth = robin.depth;
      robin.depth = robin.depth + 1;

      cloud.depth = restart.depth;
      restart.depth = restart.depth + 1;  

      GroupClouds.add(cloud);
    }
  }

function Star(){
  if(gameState === END){
    return;
  } 
  
  else{
    for(var s=0; s<2; s++){
      star[s] = createSprite(Math.floor(random(0,width)),Math.floor(random(200,height-300)),4,9);
    }

    for(var s=0; s<2; s++){
      star[s].addImage(starImage);
      star[s].scale=0.07;
      
      star[s].lifetime=20;
      
      //adjust the depth
      star[s].depth=Moon.depth;
      Moon.depth=Moon.depth+1;

      GroupStar.add(star[s]);
    }
  }
}

// function Rain(){
//   if(gameState === END){
//     return;
//   } 
  
//   else{
//     for(var i=0; i<2; i++){
//       drop[i] = createSprite(Math.floor(random(0,width)),0,3,3);
//     }

//     for(var i=0; i<2; i++){
//       drop[i].addImage(dropImage);
//       drop[i].scale=0.05;
//       drop[i].velocityY=12;

//       drop[i].lifetime = 45;

//       //adjust the depth
//       drop[i].depth = robin.depth;
//       robin.depth = robin.depth + 1;

//       GroupRain.add(drop[i]);
//     }
//   }
// }

function thunderBolt(){
  if(gameState === END){
    return;
  } else if(frameCount % 65 === 0){
      thunder = createSprite(Math.floor(random(50,width-50)),0,2,2);
      thunder.scale = 0.7;

      thunderStr.play();
      thunderStr.setVolume(0.2);
      
      //generate random lightnings
      let rand = Math.floor(random(1,4));

      switch(rand){
        case 1: thunder.addImage(thunderImage1);
        break;

        case 2: thunder.addImage(thunderImage2);
        break;

        case 3: thunder.addImage(thunderImage3);
        break;

        case 4: thunder.addImage(thunderImage4);
        break;

        default: break;
      }

      thunder.lifetime = 20;

      //adjust the depth
      thunder.depth = robin.depth;
      robin.depth = robin.depth + 1;

      GroupThunder.add(thunder);

    }
}

function spawnhurdles() {
  if(gameState === END){
    //adjust the depth
    hurdle.depth = robin.depth;
    robin.depth = robin.depth + 1;

    return;
  } else if (frameCount % 45 === 0) {
      hurdle = createSprite(width, 0, 10, 40);
      hurdle.velocityX = -(10 + Math.floor(score / 100));
      hurdle.debug=false;

      //generate random hurdles
      let rand = Math.floor(random(1, 5));

      switch (rand) {
        case 1: hurdle.addImage("Sprites/Hurdles1", hurdleImages1);
        break;

        case 2: hurdle.addImage("Sprites/Hurdles2", hurdleImages2);
        break;

        case 3: hurdle.addImage("Sprites/Hurdles3", hurdleImages3);
        break;

        case 4: hurdle.addImage("Sprites/Hurdles4", hurdleImages4);
        break;

        default: break;
      }

      if (rand === 1 || rand === 2) {
        hurdle.y = height-175;
        hurdle.scale = 1.3;
      } else {
        hurdle.y = Math.floor(random(height-180,height-210));
        hurdle.scale = 0.6;
        // console.log(hurdle.y);
      }

      hurdle.lifetime = 180;

      //adjust the depth
      hurdle.depth = robin.depth;
      robin.depth = robin.depth + 1;

      hurdle.depth = restart.depth;
      restart.depth = restart.depth + 1;

      GroupHurdles.add(hurdle);
    }
}

function spawnObstacles() {
  if(gameState === END){
    //adjust the depth
    obstacle.depth = robin.depth;
    robin.depth = robin.depth + 1;

    return;
  } else if (frameCount % 40 === 0) {
      obstacle = createSprite(width, 0, 10, 40);
      obstacle.velocityX = -(8 + Math.floor(score / 100));
      // obstacle.debug=true;

      //generate random hurdles
      let rand = Math.floor(random(1, 4));

      switch (rand) {
        case 1: obstacle.addAnimation("spinner", animateSpin);
          break;

        case 2: obstacle.addAnimation("movingObs", animateObs);
          break;
        
        case 3: obstacle.addAnimation("movingObstacle", animateObstacle);

        default: break;
      }

      if (rand === 1) {
        obstacle.y = height-186;
        obstacle.scale=0.21;
      } else if(rand === 2) {
        obstacle.y = height-186;
        obstacle.scale=0.15;
      } else{
        obstacle.y = height-186;
        obstacle.scale=0.27;
        // obstacle.debug=true;
        obstacle.setCollider("rectangle",0,0,115,275);
      }

      obstacle.lifetime = 180;

      //adjust the depth
      obstacle.depth = robin.depth;
      robin.depth = robin.depth + 1;

      obstacle.depth = restart.depth;
      restart.depth = restart.depth + 1;

      GroupObstacles.add(obstacle);
    }
}

function TransGhost(){
  if(gameState === END){
    return;
  } else if(frameCount % 45 === 0){
      transGhost = createSprite(Math.floor(random(0,width)),Math.floor(random(200,height-210)),13,18);
      transGhost.scale=0.3;
      //generate random numbers
      let rand = Math.floor(random(1,3));

      switch(rand){
        case 1: transGhost.x=0;
                transGhost.velocityX = 3 + Math.floor(score/100);
                transGhost.addImage(ghostImage2);
        break;

        case 2: transGhost.x=width;
                transGhost.velocityX = -(3 + Math.floor(score/100));
                transGhost.addImage(ghostImage1);
        break;

        default: break;
      }

      transGhost.lifetime = 180;

      //adjust the depth
      transGhost.depth = restart.depth;
      restart.depth = restart.depth + 1;

      GroupGhost.add(transGhost);  
    }
}

function spawnGhostObs(){
  if(gameState === END){

     //generate random number
     let rand = Math.floor(random(1,3));

     switch(rand){
       case 1: ghostObs.changeAnimation("flyGhostIdle", ghostIdle1);
       break;
     
       case 2: ghostObs.changeAnimation("skullGhostIdle", ghostIdle2);
       break;
     
       default: break;
     }

    //adjust the depth
    ghostObs.depth = robin.depth;
    robin.depth = robin.depth + 1;

    return;
  } else if(frameCount % 35 === 0){
      ghostObs = createSprite(width, 0 , 50, 50);
      ghostObs.velocityX = -(8 + Math.floor(score / 110));
      // ghostObs.debug=true;

      //generate random number
      let rand = Math.floor(random(1,4));

      switch(rand){
        case 1: ghostObs.addAnimation("flyingGhost", animateGhost1);
                ghostObs.addAnimation("flyGhostIdle", ghostIdle1);
        break;

        case 2: ghostObs.addAnimation("skullGhost", animateGhost3);
                ghostObs.addAnimation("skullGhostIdle", ghostIdle2);
        break;

        case 3: ghostObs.addImage(animateGhost2);
        break;

        default: break;
      }

      if(rand ===  1){
        ghostObs.y = Math.floor(random(height-200,height-215));
        ghostObs.scale = 0.4;
      } else if(rand === 3){
        ghostObs.y = Math.floor(random(height-185,height-215));
        ghostObs.scale = 0.3;
        // ghostObs.debug = true;
        ghostObs.setCollider("rectangle",0,0,170,168);
      } else{
        ghostObs.y = height-185;
        ghostObs.scale = 0.3;
      }
      
      ghostObs.lifetime = 180;

      //adjust the depth
      ghostObs.depth = robin.depth;
      robin.depth = robin.depth + 1;

      //adjust the depth
      ghostObs.depth = restart.depth;
      restart.depth = restart.depth + 1;

      GroupGhostObs.add(ghostObs);  

    }
}

function spawnCreatures(){
  if(gameState === END){

    //generate random number
    let rand = Math.floor(random(1,3));

    switch(rand){
      case 1: creatureObs.changeAnimation("robotIdle", creatureImage1);
      break;
    
      case 2: creatureObs.changeAnimation("MonsIdle", creatureImage2);
      break;
    
      default: break;
    }

    //adjust the depth
    creatureObs.depth = robin.depth;
    robin.depth = robin.depth + 1;

    return;
  } else if(frameCount % 30 === 0){    
      creatureObs = createSprite(width, 0 , 10, 10);
      creatureObs.velocityX = -(7 + Math.floor(score / 120));
      // creatureObs.debug=true;

      //generate random number
      let rand = Math.floor(random(1,4));
      // console.log(rand);

      switch(rand){
        case 1: creatureObs.addAnimation("movingRobot", animateCreature1);
                creatureObs.addAnimation("robotIdle", creatureImage1);
        break;

        case 2: creatureObs.addAnimation("runningMons", animateCreature2);
                creatureObs.addAnimation("MonsIdle", creatureImage2);
        break;

        case 3: creatureObs.addAnimation("witchMons", animateCreature3);
        break;

        default: break;
      }

      if(rand ===  1){
        creatureObs.y = height-185;
        creatureObs.scale = 0.2;
        // creatureObs.debug=true;
        creatureObs.setCollider("rectangle",0,0,300,320);
      } else if(rand === 2){
        creatureObs.y = height-185;
        creatureObs.scale = 0.14;
      } else{
        creatureObs.y = height-240;
        creatureObs.scale = 0.17;
        // creatureObs.debug=true;
      }
      
      creatureObs.lifetime = 180;

      //adjust the depth
      creatureObs.depth = robin.depth;
      robin.depth = robin.depth + 1;

      creatureObs.depth = restart.depth;
      restart.depth = restart.depth + 1;

      GroupCreatures.add(creatureObs); 
    }
}

function spawnALL(){
  if(gameState != PLAY){

    //generate random number
    let rand = Math.floor(random(9,13));

    switch(rand){
      case 9: All.changeAnimation("flyGhostIdle", ghostIdle1);
      break;

      case 10: All.changeAnimation("skullGhostIdle", ghostIdle2);      
      break;

      case 11: All.changeAnimation("robotIdle", creatureImage1);
      break;
     
      case 12: All.changeAnimation("MonsIdle", creatureImage2);
      break;
     
      default: break;
    }

    //adjust the depth
    All.depth = robin.depth;
    robin.depth = robin.depth+1;

    return;
  } else if(frameCount % 35 === 0){
    All = createSprite(width,0,50,50);
    All.velocityX = -(7 + Math.floor(score / 150));

    //generate random number
    let randNum = Math.floor(random(1,14));

    switch(randNum){
      case 1: All.addImage("Sprites/Hurdles1", hurdleImages1);
      break;

      case 2: All.addImage("Sprites/Hurdles2", hurdleImages2);
      break;

      case 3: All.addImage("Sprites/Hurdles3", hurdleImages3);
      break;

      case 4: All.addImage("Sprites/Hurdles4", hurdleImages4);
      break; 

      case 5: All.addAnimation("spinner", animateSpin);
      break;

      case 6: All.addAnimation("movingObs", animateObs);
      break;
        
      case 7: All.addAnimation("movingObstacle", animateObstacle);
      break;

      case 8: All.addImage(animateGhost2);
      break;

      case 9: All.addAnimation("flyingGhost", animateGhost1);
              All.addAnimation("flyGhostIdle", ghostIdle1);
      break;

      case 10: All.addAnimation("skullGhost", animateGhost3);  
               All.addAnimation("skullGhostIdle", ghostIdle2);      
      break;

      case 11: All.addAnimation("movingRobot", animateCreature1);
               All.addAnimation("robotIdle", creatureImage1);
      break;

      case 12: All.addAnimation("runningMons", animateCreature2);
               All.addAnimation("MonsIdle", creatureImage2);
      break;

      case 13: All.addAnimation("witchMons", animateCreature3);
      break;
    }

    if (randNum === 1 || randNum === 2) {
      All.y = height-175;
      All.scale = 1.3;
    } else if(randNum === 3 || randNum === 4) {
      All.y = Math.floor(random(height-180,height-210));
      All.scale = 0.6;
      // console.log(All.y);
    } else if (randNum === 5) {
      All.y = height-186;
      All.scale=0.21;
    } else if(randNum === 6) {
      All.y = height-186;
      All.scale=0.15;
    } else if(randNum === 7) {
      All.y = height-186;
      All.scale=0.27;
      // All.debug=true;
      All.setCollider("rectangle",0,0,115,275);
    } else if(randNum ===  8){
      All.y = Math.floor(random(height-200,height-215));
      All.scale = 0.3;
      // All.debug = true;
      All.setCollider("rectangle",0,0,170,168);
    } else if(randNum === 9){
      All.y = Math.floor(random(height-180,height-215));
      All.scale = 0.4;
    } else if(randNum === 10){
      All.y = height-185;
      All.scale = 0.3;
    } else if(randNum ===  11){
      All.y = height-185;
      All.scale = 0.2;
      // All.debug=true;
      All.setCollider("rectangle",0,0,300,320);
    } else if(randNum === 12){
      All.y = height-185;
      All.scale = 0.14;
    } else{
      All.y = height-240;
      All.scale = 0.17;
      // All.debug=true;
    }

    All.lifetime = 180;

    //adjust the depth
    All.depth = robin.depth;
    robin.depth = robin.depth+1;

    All.depth = restart.depth;
    restart.depth = restart.depth + 1;

    ALLGroups.add(All);
  }
}
