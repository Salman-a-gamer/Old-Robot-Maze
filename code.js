

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7378a462-78ea-4691-b465-58be3c44c2fb","3cba75cb-4ff1-4447-8267-c05a7fbec281","f64b6fdb-a8eb-4115-96de-32469bf5789e","7d840792-e066-4b5f-ad72-f1d8ac35a64b"],"propsByKey":{"7378a462-78ea-4691-b465-58be3c44c2fb":{"name":"Sofi","sourceUrl":"assets/api/v1/animation-library/gamelab/0iUARsOQPnXBr6mn.aAF7upm8PUh803G/category_characters/kid_36.png","frameSize":{"x":239,"y":340},"frameCount":1,"looping":true,"frameDelay":3,"version":"0iUARsOQPnXBr6mn.aAF7upm8PUh803G","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":340},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0iUARsOQPnXBr6mn.aAF7upm8PUh803G/category_characters/kid_36.png"},"3cba75cb-4ff1-4447-8267-c05a7fbec281":{"name":"Cupdh","sourceUrl":"assets/v3/animations/9BzR3m9FiGgbs0J7Gsfwv6AxXnCJiDrwnMVvwVPhMOU/3cba75cb-4ff1-4447-8267-c05a7fbec281.png","frameSize":{"x":271,"y":186},"frameCount":1,"looping":true,"frameDelay":60,"version":"WQ9JzSVTKznjSxt4RFt1hX1Lily5_NkT","loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":186},"rootRelativePath":"assets/v3/animations/9BzR3m9FiGgbs0J7Gsfwv6AxXnCJiDrwnMVvwVPhMOU/3cba75cb-4ff1-4447-8267-c05a7fbec281.png"},"f64b6fdb-a8eb-4115-96de-32469bf5789e":{"name":"Cup","sourceUrl":null,"frameSize":{"x":48,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"Wo8G1kKcuZGpFcnnQntHZpzMjrPahKYg","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":62},"rootRelativePath":"assets/f64b6fdb-a8eb-4115-96de-32469bf5789e.png"},"7d840792-e066-4b5f-ad72-f1d8ac35a64b":{"name":"Sofia","sourceUrl":"assets/api/v1/animation-library/gamelab/FAgDzxmzCBGvnH387IDQCfPYKIZg1TrF/category_characters/baby_robot.png","frameSize":{"x":240,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"FAgDzxmzCBGvnH387IDQCfPYKIZg1TrF","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FAgDzxmzCBGvnH387IDQCfPYKIZg1TrF/category_characters/baby_robot.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


// These are the borders
 var block1 = createSprite(8,200,3,379);
  block1.shapeColor = "white";

 var block2 = createSprite(200,395,365,3);
  block2.shapeColor = "white";

 var block3 = createSprite(390,200,3,379);
  block3.shapeColor = "white";
  
 var block4 = createSprite(200,8,365,3);
  block4.shapeColor = "white";
  
 var block5 = createSprite(50,50,3,70);
  block5.shapeColor = "white"; 
 
 var block6 = createSprite(50,225,3,50);
  block6.shapeColor = "white"; 
 
 var block7 = createSprite(73,250,50,3);
  block7.shapeColor = "white"; 
 
 var block8 = createSprite(73,85,50,3);
  block8.shapeColor = "white";
  
 var block9 = createSprite(98,90,3,150);
  block9.shapeColor = "white"; 
  
 var block10 = createSprite(145,163,90,3);
  block10.shapeColor = "white";  
  
  var block11 = createSprite(190,187,3,50);
  block11.shapeColor = "white"; 
  
  var block12 = createSprite(163,210,50,3);
  block12.shapeColor = "white"; 
 
 var block13 = createSprite(50,90,3,100);
  block13.shapeColor = "white"; 
 
  var block14 = createSprite(140,250,3,85);
  block14.shapeColor = "white"; 
  
   var block15 = createSprite(165,240,55,3);
  block15.shapeColor = "white"; 
  
   var block16 = createSprite(80,349,70,3);
  block16.shapeColor = "white"; 
  
   var block17 = createSprite(45,330,3,40);
  block17.shapeColor = "white";
  
   var block18 = createSprite(113,368,3,40);
  block18.shapeColor = "white"; 
  
   var block19 = createSprite(210,349,200,3);
  block19.shapeColor = "white"; 
  
   var block20 = createSprite(237,230,3,150);
  block20.shapeColor = "white"; 
  
   var block21 = createSprite(273,305,70,3);
  block21.shapeColor = "white"; 
  
   var block22 = createSprite(255,100,50,3);
  block22.shapeColor = "white";
  
   var block23 = createSprite(280,175,3,150);
  block23.shapeColor = "white"; 
  
   var block24 = createSprite(310,248,60,3);
  block24.shapeColor = "white"; 
  
   var block25 = createSprite(337,300,3,100);
  block25.shapeColor = "white"; 
  
   var block26 = createSprite(307,349,58,3);
  block26.shapeColor = "white";
  
   var block27 = createSprite(305,325,3,45);
  block27.shapeColor = "white";
  
   var block28 = createSprite(130,65,3,40);
  block28.shapeColor = "white"; 
  
   var block29 = createSprite(160,43,60,3);
  block29.shapeColor = "white"; 
  
   var block30 = createSprite(187,80,3,70);
  block30.shapeColor = "white";
  
   var block31 = createSprite(332,90,3,160);
  block31.shapeColor = "white"; 
    
 
 
 
// Animations  
  
  
  var cup = createSprite(200,370);  
  cup.setAnimation("Cup");
  cup.scale = 0.4;
  
  var sofia = createSprite(30,35);
  sofia.setAnimation("Sofia");
  sofia.scale = 0.125;

var gamestate = "serve";
function draw() {
  
  background(World.mouseX,0,World.mouseY);
createEdgeSprites();

if(gamestate == "serve"){
  fill("green");
  textSize(20);
  textFont("Arial");
  text("USE ARROW KEYS FOR MOVEMENT",25,200);
}

// Movement of Sofia  
if(keyDown(UP_ARROW)) {
  sofia.setVelocity(0,-4);
  gamestate = "play";
}

if(keyDown(DOWN_ARROW)){
  sofia.setVelocity(0,4);
  gamestate = "play";
}

if (keyDown(RIGHT_ARROW)){
  sofia.setVelocity(4,0);
  gamestate = "play";
}
  
if (keyDown(LEFT_ARROW)) {
  sofia.setVelocity(-4,0);
  gamestate = "play";
} 

//sogia bouncing off of the blocks and edges
sofia.bounceOff(edges);
//sofia.bounceOff(block1);
//sofia.bounceOff(block2);  
//sofia.bounceOff(block3);
//sofia.bounceOff(block4);
sofia.bounceOff(block5);
sofia.bounceOff(block6);
sofia.bounceOff(block7);
sofia.bounceOff(block8);
sofia.bounceOff(block9);
sofia.bounceOff(block10);
sofia.bounceOff(block11);
sofia.bounceOff(block12);
sofia.bounceOff(block13);
sofia.bounceOff(block14);
sofia.bounceOff(block15);
sofia.bounceOff(block16);
sofia.bounceOff(block17);
sofia.bounceOff(block18);
sofia.bounceOff(block19);
sofia.bounceOff(block20);
sofia.bounceOff(block21);
sofia.bounceOff(block22);
sofia.bounceOff(block23);
sofia.bounceOff(block24);
sofia.bounceOff(block25);
sofia.bounceOff(block26);
sofia.bounceOff(block27);
sofia.bounceOff(block28);
sofia.bounceOff(block29);
sofia.bounceOff(block30);
sofia.bounceOff(block31);

// sofia comes back to intial position
if (sofia.isTouching(block1) || sofia.isTouching(block2) || 
sofia.isTouching(block3) || sofia.isTouching(block4)){
  sofia.x=30;
  sofia.y=35;
  gamestate = "serve";
}

// you win
if (sofia.isTouching(cup)){

sofia.setVelocity(0,0);

 block5.setVelocity(random(-4,8),random(-4,8));
 block6.setVelocity(random(-4,8),random(-4,8));
 block7.setVelocity(random(-4,8),random(-4,8));
 block8.setVelocity(random(-4,8),random(-4,8));
 block9.setVelocity(random(-4,8),random(-4,8));
 block10.setVelocity(random(-4,8),random(-4,8));
 block11.setVelocity(random(-4,8),random(-4,8));
 block12.setVelocity(random(-4,8),random(-4,8));
 block13.setVelocity(random(-4,8),random(-4,8));
 block14.setVelocity(random(-4,8),random(-4,8));
 block15.setVelocity(random(-4,8),random(-4,8));
 block16.setVelocity(random(-4,8),random(-4,8));
 block17.setVelocity(random(-4,8),random(-4,8));
 block18.setVelocity(random(-4,8),random(-4,8));
 block19.setVelocity(random(-4,8),random(-4,8));
 block20.setVelocity(random(-4,8),random(-4,8));
 block21.setVelocity(random(-4,8),random(-4,8));
 block22.setVelocity(random(-4,8),random(-4,8));
 block23.setVelocity(random(-4,8),random(-4,8));
 block24.setVelocity(random(-4,8),random(-4,8));
 block25.setVelocity(random(-4,8),random(-4,8));
 block26.setVelocity(random(-4,8),random(-4,8));
 block27.setVelocity(random(-4,8),random(-4,8));
 block28.setVelocity(random(-4,8),random(-4,8));
 block29.setVelocity(random(-4,8),random(-4,8));
 block30.setVelocity(random(-4,8),random(-4,8));
 block31.setVelocity(random(-4,8),random(-4,8));
 
 textAlign(CENTER);
textFont("Comic Sans MS");
textSize(36);
fill('green');
text("CONGRATS!!",200,200);
text("YOU WIN!!", 200, 250);
sofia.setVelocity(0,0);

} 
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
