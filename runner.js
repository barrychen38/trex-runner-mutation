function HorizonLine(t,i){this.spritePos=i,this.canvas=t,this.canvasCtx=t.getContext("2d"),this.sourceDimensions={},this.dimensions=HorizonLine.dimensions,this.sourceXPos=[this.spritePos.x,this.spritePos.x+this.dimensions.WIDTH],this.xPos=[],this.yPos=0,this.bumpThreshold=.5,this.setSourceDimensions(),this.draw()}function getRandomNum(t,i){return Math.floor(Math.random()*(i-t+1))+t}function vibrate(t){IS_MOBILE&&window.navigator.vibrate&&window.navigator.vibrate(t)}function createCanvas(t,i,s,e){var n=document.createElement("canvas");return n.className=e?Runner.classes.CANVAS+" "+e:Runner.classes.CANVAS,n.width=i,n.height=s,t.appendChild(n),n}function decodeBase64ToArrayBuffer(t){for(var i=t.length/4*3,s=atob(t),e=new ArrayBuffer(i),n=new Uint8Array(e),o=0;o<i;o++)n[o]=s.charCodeAt(o);return n.buffer}function getTimeStamp(){return IS_IOS?(new Date).getTime():performance.now()}function checkForCollision(t,i,s){Runner.defaultDimensions.WIDTH,t.xPos;var e=new CollisionBox(i.xPos+1,i.yPos+1,i.config.WIDTH-2,i.config.HEIGHT-2),n=new CollisionBox(t.xPos+1,t.yPos+1,t.typeConfig.width*t.size-2,t.typeConfig.height-2);if(s&&drawCollisionBoxes(s,e,n),boxCompare(e,n))for(var o=t.collisionBoxes,h=i.ducking?Trex.collisionBoxes.DUCKING:Trex.collisionBoxes.RUNNING,a=0;a<h.length;a++)for(var r=0;r<o.length;r++){var c=createAdjustedCollisionBox(h[a],e),u=createAdjustedCollisionBox(o[r],n),d=boxCompare(c,u);if(s&&drawCollisionBoxes(s,c,u),d)return[c,u]}return!1}function checkBulletCollision(t,i){if(!i)return!1;Runner.defaultDimensions.WIDTH,t.xPos;return boxCompare(new CollisionBox(i.xPos+1,i.yPos+1,i.config.WIDTH-2,i.config.HEIGHT-2),new CollisionBox(t.xPos+1,t.yPos+1,t.typeConfig.width*t.size-2,t.typeConfig.height-2))}function createAdjustedCollisionBox(t,i){return new CollisionBox(t.x+i.x,t.y+i.y,t.width,t.height)}function drawCollisionBoxes(t,i,s){t.save(),t.strokeStyle="#f00",t.strokeRect(i.x,i.y,i.width,i.height),t.strokeStyle="#0f0",t.strokeRect(s.x,s.y,s.width,s.height),t.restore()}function boxCompare(t,i){var s=!1,e=(t.x,t.y,i.x);i.y;return t.x<e+i.width&&t.x+t.width>e&&t.y<i.y+i.height&&t.height+t.y>i.y&&(s=!0),s}function CollisionBox(t,i,s,e){this.x=t,this.y=i,this.width=s,this.height=e}function throttle(n,o){var h=null,a=Date.now();return function(){var t=Date.now(),i=o-(t-a),s=this,e=arguments;i<=0?(n.apply(s,e),a=Date.now()):h||(h=setTimeout(function(){n.apply(s,e),h=null},i))}}function Bullet(t){this.canvasCtx=t,this.width=this.canvasCtx.canvas.width,this.remove=!1,this.xPos=0,this.yPos=0,this.config=Bullet.config,this.init()}function Trex(t,i,s,e){this.canvas=t,this.canvasCtx=t.getContext("2d"),this.spritePos=i,this.spriteTextPos=s,this.xPos=0,this.yPos=0,this.groundYPos=0,this.currentFrame=0,this.currentAnimFrames=[],this.blinkDelay=0,this.animStartTime=0,this.timer=0,this.msPerFrame=1e3/FPS,this.config=Trex.config,this.status=Trex.status.WAITING,this.jumping=!1,this.ducking=!1,this.jumpVelocity=0,this.reachedMinHeight=!1,this.speedDrop=!1,this.jumpCount=0,this.jumpspotX=0,this.bullets=[],this.bulletsAmounts=0,this.bulletAmountsX=0,this.bulletAmountsY=8,this.defaultBulletAmountString="",this.bulletDigits=[],this.init(e)}function Runner(t,i){if(Runner.instance_)return Runner.instance_;(Runner.instance_=this).outerContainerEl=document.querySelector(t),this.shootTip=document.getElementById("shoot-tip"),this.containerEl=null,this.snackbarEl=null,this.detailsButton=this.outerContainerEl.querySelector("#details-button"),this.config=i||Runner.config,this.dimensions=Runner.defaultDimensions,this.canvas=null,this.canvasCtx=null,this.tRex=null,this.distanceMeter=null,this.distanceRan=0,this.highestScore=0,this.time=0,this.runningTime=0,this.msPerFrame=1e3/FPS,this.currentSpeed=this.config.SPEED,this.obstacles=[],this.started=!1,this.activated=!1,this.crashed=!1,this.paused=!1,this.inverted=!1,this.invertTimer=0,this.resizeTimerId_=null,this.playCount=0,this.audioBuffer=null,this.soundFx={},this.audioContext=null,this.images={},this.imagesLoaded=0,this.canIncreaseBulletOnce=!0,this.timer=null,this.loadImages()}HorizonLine.dimensions={WIDTH:600,HEIGHT:12,YPOS:127},HorizonLine.prototype={setSourceDimensions:function(){for(var t in HorizonLine.dimensions)IS_HIDPI?"YPOS"!=t&&(this.sourceDimensions[t]=2*HorizonLine.dimensions[t]):this.sourceDimensions[t]=HorizonLine.dimensions[t],this.dimensions[t]=HorizonLine.dimensions[t];this.xPos=[0,HorizonLine.dimensions.WIDTH],this.yPos=HorizonLine.dimensions.YPOS},getRandomType:function(){return Math.random()>this.bumpThreshold?this.dimensions.WIDTH:0},draw:function(){this.canvasCtx.drawImage(Runner.imageSprite,this.sourceXPos[0],this.spritePos.y,this.sourceDimensions.WIDTH,this.sourceDimensions.HEIGHT,this.xPos[0],this.yPos,this.dimensions.WIDTH,this.dimensions.HEIGHT),this.canvasCtx.drawImage(Runner.imageSprite,this.sourceXPos[1],this.spritePos.y,this.sourceDimensions.WIDTH,this.sourceDimensions.HEIGHT,this.xPos[1],this.yPos,this.dimensions.WIDTH,this.dimensions.HEIGHT)},updateXPos:function(t,i){var s=t,e=0==t?1:0;this.xPos[s]-=i,this.xPos[e]=this.xPos[s]+this.dimensions.WIDTH,this.xPos[s]<=-this.dimensions.WIDTH&&(this.xPos[s]+=2*this.dimensions.WIDTH,this.xPos[e]=this.xPos[s]-this.dimensions.WIDTH,this.sourceXPos[s]=this.getRandomType()+this.spritePos.x)},update:function(t,i){var s=Math.floor(i*(FPS/1e3)*t);this.xPos[0]<=0?this.updateXPos(0,s):this.updateXPos(1,s),this.draw()},reset:function(){this.xPos[0]=0,this.xPos[1]=HorizonLine.dimensions.WIDTH}},Bullet.config={WIDTH:20,HEIGHT:10,OFFSET_LEFT:3,OFFSET_TOP:8,SPEED:8,SHOT_DELAY:500},Bullet.prototype={init:function(){this.loadImages()},update:function(t,i){this.remove||(this.savedX||(this.savedX=t+Trex.config.WIDTH-this.config.WIDTH-this.config.OFFSET_LEFT,this.xPos=this.savedX),this.savedY||(this.savedY=i+this.config.OFFSET_TOP,this.yPos=this.savedY),this.draw(this.xPos,this.yPos),this.xPos+=this.config.SPEED,this.isVisible()||(this.remove=!0))},draw:function(t,i){t=t||this.savedX;this.image&&this.canvasCtx.drawImage(this.image,t,i,this.config.WIDTH,this.config.HEIGHT)},loadImages:function(){this.image=document.getElementById("bullet")},isVisible:function(){return this.xPos<this.width}},Trex.config={DROP_VELOCITY:-5,GRAVITY:.6,HEIGHT:47,HEIGHT_DUCK:25,INIITAL_JUMP_VELOCITY:-10,INTRO_DURATION:1500,MAX_JUMP_HEIGHT:30,MIN_JUMP_HEIGHT:30,SPEED_DROP_COEFFICIENT:3,SPRITE_WIDTH:262,START_X_POS:50,WIDTH:44,WIDTH_DUCK:59,MAX_BULLETS_UNITS:4},Trex.collisionBoxes={DUCKING:[new CollisionBox(1,18,55,25)],RUNNING:[new CollisionBox(22,0,17,16),new CollisionBox(1,18,30,9),new CollisionBox(10,35,14,8),new CollisionBox(1,24,29,5),new CollisionBox(5,30,21,4),new CollisionBox(9,34,15,4)]},Trex.status={CRASHED:"CRASHED",DUCKING:"DUCKING",JUMPING:"JUMPING",RUNNING:"RUNNING",WAITING:"WAITING"},Trex.BLINK_TIMING=7e3,Trex.animFrames={WAITING:{frames:[44,0],msPerFrame:1e3/3},RUNNING:{frames:[88,132],msPerFrame:1e3/12},CRASHED:{frames:[220],msPerFrame:1e3/60},JUMPING:{frames:[0],msPerFrame:1e3/60},DUCKING:{frames:[262,321],msPerFrame:125}},Trex.prototype={init:function(t){this.blinkDelay=this.setBlinkDelay(),this.groundYPos=Runner.defaultDimensions.HEIGHT-this.config.HEIGHT-Runner.config.BOTTOM_PAD,this.yPos=this.groundYPos,this.minJumpHeight=this.groundYPos-this.config.MIN_JUMP_HEIGHT,this.draw(0,0),this.update(0,Trex.status.WAITING),this.calcXPos(t);for(var i=0;i<this.config.MAX_BULLETS_UNITS;i++)this.drawBulletAmounts(i,0),this.defaultBulletAmountString+="0"},calcXPos:function(t){this.bulletAmountsX=t-DistanceMeter.dimensions.DEST_WIDTH*(Trex.config.MAX_BULLETS_UNITS+1)},setJumpVelocity:function(t){this.config.INIITAL_JUMP_VELOCITY=-t,this.config.DROP_VELOCITY=-t/2},update:function(t,i){this.timer+=t,i&&(this.status=i,this.currentFrame=0,this.msPerFrame=Trex.animFrames[i].msPerFrame,this.currentAnimFrames=Trex.animFrames[i].frames,i==Trex.status.WAITING&&(this.animStartTime=getTimeStamp(),this.setBlinkDelay())),this.playingIntro&&this.xPos<this.config.START_X_POS&&(this.xPos+=Math.round(this.config.START_X_POS/this.config.INTRO_DURATION*t)),this.status==Trex.status.WAITING?this.blink(getTimeStamp()):this.draw(this.currentAnimFrames[this.currentFrame],0),this.timer>=this.msPerFrame&&(this.currentFrame=this.currentFrame==this.currentAnimFrames.length-1?0:this.currentFrame+1,this.timer=0),this.speedDrop&&this.yPos==this.groundYPos&&(this.speedDrop=!1,this.setDuck(!0))},draw:function(t,i){var s=t,e=i,n=this.ducking&&this.status!=Trex.status.CRASHED?this.config.WIDTH_DUCK:this.config.WIDTH,o=this.config.HEIGHT;IS_HIDPI&&(s*=2,e*=2,n*=2,o*=2),s+=this.spritePos.x,e+=this.spritePos.y,this.ducking&&this.status!=Trex.status.CRASHED?this.canvasCtx.drawImage(Runner.imageSprite,s,e,n,o,this.xPos,this.yPos,this.config.WIDTH_DUCK,this.config.HEIGHT):(this.ducking&&this.status==Trex.status.CRASHED&&this.xPos++,this.canvasCtx.drawImage(Runner.imageSprite,s,e,n,o,this.xPos,this.yPos,this.config.WIDTH,this.config.HEIGHT))},setBlinkDelay:function(){this.blinkDelay=Math.ceil(Math.random()*Trex.BLINK_TIMING)},blink:function(t){t-this.animStartTime>=this.blinkDelay&&(this.draw(this.currentAnimFrames[this.currentFrame],0),1==this.currentFrame&&(this.setBlinkDelay(),this.animStartTime=t))},shoot:function(){0<this.bulletsAmounts&&(this.bulletsAmounts--,this.addNewBullet(this.canvasCtx))},addNewBullet:function(t){var i=new Bullet(t);this.bullets.push(i)},updateBulletAmounts:function(){this.bulletDigits=(this.defaultBulletAmountString+this.bulletsAmounts).substr(-this.config.MAX_BULLETS_UNITS).split("");for(var t=0;t<this.config.MAX_BULLETS_UNITS;t++)this.drawBulletAmounts(t,this.bulletDigits[t])},drawBulletAmounts:function(t,i){var s=DistanceMeter.dimensions.WIDTH,e=DistanceMeter.dimensions.HEIGHT,n=DistanceMeter.dimensions.WIDTH*i,o=0,h=t*DistanceMeter.dimensions.DEST_WIDTH,a=this.bulletAmountsY+DistanceMeter.dimensions.HEIGHT,r=DistanceMeter.dimensions.WIDTH,c=DistanceMeter.dimensions.HEIGHT;IS_HIDPI&&(s*=2,e*=2,n*=2),n+=this.spriteTextPos.x,o+=this.spriteTextPos.y,this.canvasCtx.save(),this.canvasCtx.globalAlpha=.7,this.canvasCtx.translate(this.bulletAmountsX,this.bulletAmountsY),this.canvasCtx.drawImage(Runner.imageSprite,n,o,s,e,h,a,r,c),this.canvasCtx.restore()},startJump:function(t){this.jumping||(this.update(0,Trex.status.JUMPING),this.jumpVelocity=this.config.INIITAL_JUMP_VELOCITY-t/10,this.jumping=!0,this.reachedMinHeight=!1,this.speedDrop=!1)},endJump:function(){this.reachedMinHeight&&this.jumpVelocity<this.config.DROP_VELOCITY&&(this.jumpVelocity=this.config.DROP_VELOCITY)},updateJump:function(t,i){var s=t/Trex.animFrames[this.status].msPerFrame;this.speedDrop?this.yPos+=Math.round(this.jumpVelocity*this.config.SPEED_DROP_COEFFICIENT*s):this.yPos+=Math.round(this.jumpVelocity*s),this.jumpVelocity+=this.config.GRAVITY*s,(this.yPos<this.minJumpHeight||this.speedDrop)&&(this.reachedMinHeight=!0),(this.yPos<this.config.MAX_JUMP_HEIGHT||this.speedDrop)&&this.endJump(),this.yPos>this.groundYPos&&(this.reset(!0),this.jumpCount++),this.update(t)},setSpeedDrop:function(){this.speedDrop=!0,this.jumpVelocity=1},setDuck:function(t){t&&this.status!=Trex.status.DUCKING?(this.update(0,Trex.status.DUCKING),this.ducking=!0):this.status==Trex.status.DUCKING&&(this.update(0,Trex.status.RUNNING),this.ducking=!1)},reset:function(t){this.yPos=this.groundYPos,this.jumpVelocity=0,this.jumping=!1,this.ducking=!1,this.update(0,Trex.status.RUNNING),this.midair=!1,this.speedDrop=!1,this.jumpCount=0,t||(this.bullets=[])}},window.Runner=Runner;var DEFAULT_WIDTH=600,FPS=60,IS_HIDPI=1<window.devicePixelRatio,IS_IOS=-1<window.navigator.userAgent.indexOf("CriOS")||"UIWebViewForStaticFileContent"==window.navigator.userAgent,IS_MOBILE=-1<window.navigator.userAgent.indexOf("Mobi")||IS_IOS,IS_TOUCH_ENABLED="ontouchstart"in window;function Obstacle(t,i,s,e,n,o,h){this.canvasCtx=t,this.spritePos=s,this.typeConfig=i,this.gapCoefficient=n,this.size=getRandomNum(1,Obstacle.MAX_OBSTACLE_LENGTH),this.dimensions=e,this.remove=!1,this.xPos=e.WIDTH+(h||0),this.yPos=0,this.width=0,this.collisionBoxes=[],this.gap=0,this.speedOffset=0,this.currentFrame=0,this.timer=0,this.init(o)}function NightMode(t,i,s){this.spritePos=i,this.canvas=t,this.canvasCtx=t.getContext("2d"),this.xPos=s-50,this.yPos=30,this.currentPhase=0,this.opacity=0,this.containerWidth=s,this.stars=[],this.drawStars=!1,this.placeStars()}function Cloud(t,i,s){this.canvas=t,this.canvasCtx=this.canvas.getContext("2d"),this.spritePos=i,this.containerWidth=s,this.xPos=s,this.yPos=0,this.remove=!1,this.cloudGap=getRandomNum(Cloud.config.MIN_CLOUD_GAP,Cloud.config.MAX_CLOUD_GAP),this.init()}function Horizon(t,i,s,e){this.canvas=t,this.canvasCtx=this.canvas.getContext("2d"),this.config=Horizon.config,this.dimensions=s,this.gapCoefficient=e,this.obstacles=[],this.obstacleHistory=[],this.horizonOffsets=[0,0],this.cloudFrequency=this.config.CLOUD_FREQUENCY,this.spritePos=i,this.clouds=[],this.cloudSpeed=this.config.BG_CLOUD_SPEED,this.horizonLine=null,this.init()}function GameOverPanel(t,i,s,e){this.canvas=t,this.canvasCtx=t.getContext("2d"),this.canvasDimensions=e,this.textImgPos=i,this.restartImgPos=s,this.draw()}function DistanceMeter(t,i,s){this.canvas=t,this.canvasCtx=t.getContext("2d"),this.image=Runner.imageSprite,this.spritePos=i,this.x=0,this.y=5,this.currentDistance=0,this.maxScore=0,this.highScore=0,this.container=null,this.digits=[],this.acheivement=!1,this.defaultString="",this.flashTimer=0,this.flashIterations=0,this.invertTrigger=!1,this.config=DistanceMeter.config,this.maxScoreUnits=this.config.MAX_DISTANCE_UNITS,this.init(s)}Runner.config={ACCELERATION:.001,BG_CLOUD_SPEED:.2,BOTTOM_PAD:10,CLEAR_TIME:3e3,CLOUD_FREQUENCY:.5,GAMEOVER_CLEAR_TIME:750,GAP_COEFFICIENT:.6,GRAVITY:.6,INITIAL_JUMP_VELOCITY:12,INVERT_FADE_DURATION:12e3,INVERT_DISTANCE:700,MAX_CLOUDS:6,MAX_OBSTACLE_LENGTH:3,MAX_OBSTACLE_DUPLICATION:2,MAX_SPEED:99999999,MIN_JUMP_HEIGHT:35,MOBILE_SPEED_COEFFICIENT:1.2,RESOURCE_TEMPLATE_ID:"audio-resources",SPEED:6,SPEED_DROP_COEFFICIENT:3},Runner.defaultDimensions={WIDTH:DEFAULT_WIDTH,HEIGHT:150},Runner.classes={CANVAS:"runner-canvas",CONTAINER:"runner-container",CRASHED:"crashed",ICON:"icon-offline",INVERTED:"inverted",SNACKBAR:"snackbar",SNACKBAR_SHOW:"snackbar-show",TOUCH_CONTROLLER:"controller"},Runner.spriteDefinition={LDPI:{CACTUS_LARGE:{x:332,y:2},CACTUS_SMALL:{x:228,y:2},CLOUD:{x:86,y:2},HORIZON:{x:2,y:54},MOON:{x:484,y:2},PTERODACTYL:{x:134,y:2},RESTART:{x:2,y:2},TEXT_SPRITE:{x:655,y:2},TREX:{x:848,y:2},STAR:{x:645,y:2}},HDPI:{CACTUS_LARGE:{x:652,y:2},CACTUS_SMALL:{x:446,y:2},CLOUD:{x:166,y:2},HORIZON:{x:2,y:104},MOON:{x:954,y:2},PTERODACTYL:{x:260,y:2},RESTART:{x:2,y:2},TEXT_SPRITE:{x:1294,y:2},TREX:{x:1678,y:2},STAR:{x:1276,y:2}}},Runner.sounds={BUTTON_PRESS:"offline-sound-press",HIT:"offline-sound-hit",SCORE:"offline-sound-reached"},Runner.keycodes={JUMP:{38:1,32:1},DUCK:{40:1},RESTART:{13:1},SHOT:{83:1}},Runner.events={ANIM_END:"webkitAnimationEnd",CLICK:"click",KEYDOWN:"keydown",KEYUP:"keyup",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",RESIZE:"resize",TOUCHEND:"touchend",TOUCHSTART:"touchstart",VISIBILITY:"visibilitychange",BLUR:"blur",FOCUS:"focus",LOAD:"load"},Runner.prototype={setupDisabledRunner:function(){},updateConfigSetting:function(t,i){if(t in this.config&&null!=i)switch(this.config[t]=i,t){case"GRAVITY":case"MIN_JUMP_HEIGHT":case"SPEED_DROP_COEFFICIENT":this.tRex.config[t]=i;break;case"INITIAL_JUMP_VELOCITY":this.tRex.setJumpVelocity(i);break;case"SPEED":this.setSpeed(i)}},loadImages:function(){IS_HIDPI?(Runner.imageSprite=document.getElementById("offline-resources-2x"),this.spriteDef=Runner.spriteDefinition.HDPI):(Runner.imageSprite=document.getElementById("offline-resources-1x"),this.spriteDef=Runner.spriteDefinition.LDPI),this.init()},loadSounds:function(){if(!IS_IOS){this.audioContext=new AudioContext;var t=document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;for(var i in Runner.sounds){var s=t.getElementById(Runner.sounds[i]).src,e=decodeBase64ToArrayBuffer(s=s.substr(s.indexOf(",")+1));this.audioContext.decodeAudioData(e,function(t,i){this.soundFx[t]=i}.bind(this,i))}}},setSpeed:function(t){var i=t||this.currentSpeed;if(this.dimensions.WIDTH<DEFAULT_WIDTH){var s=i*this.dimensions.WIDTH/DEFAULT_WIDTH*this.config.MOBILE_SPEED_COEFFICIENT;this.currentSpeed=i<s?i:s}else t&&(this.currentSpeed=t)},init:function(){this.adjustDimensions(),this.setSpeed(),this.containerEl=document.createElement("div"),this.containerEl.className=Runner.classes.CONTAINER,this.canvas=createCanvas(this.containerEl,this.dimensions.WIDTH,this.dimensions.HEIGHT,Runner.classes.PLAYER),this.canvas.id="gamecanvas",this.canvasCtx=this.canvas.getContext("2d"),this.canvasCtx.fillStyle="#f7f7f7",this.canvasCtx.fill(),Runner.updateCanvasScaling(this.canvas),this.horizon=new Horizon(this.canvas,this.spriteDef,this.dimensions,this.config.GAP_COEFFICIENT),this.distanceMeter=new DistanceMeter(this.canvas,this.spriteDef.TEXT_SPRITE,this.dimensions.WIDTH),this.tRex=new Trex(this.canvas,this.spriteDef.TREX,this.spriteDef.TEXT_SPRITE,this.dimensions.WIDTH),this.outerContainerEl.appendChild(this.containerEl),IS_MOBILE&&this.createTouchController(),this.startListening(),this.update(),window.addEventListener(Runner.events.RESIZE,this.debounceResize.bind(this)),this.shootAction=throttle(this.tRex.shoot,Bullet.config.SHOT_DELAY)},createTouchController:function(){this.touchController=document.createElement("div"),this.touchController.className=Runner.classes.TOUCH_CONTROLLER},debounceResize:function(){this.resizeTimerId_||(this.resizeTimerId_=setInterval(this.adjustDimensions.bind(this),250))},adjustDimensions:function(){clearInterval(this.resizeTimerId_),this.resizeTimerId_=null;var t=window.getComputedStyle(this.outerContainerEl),i=Number(t.paddingLeft.substr(0,t.paddingLeft.length-2));this.dimensions.WIDTH=this.outerContainerEl.offsetWidth-2*i,this.canvas&&(this.canvas.width=this.dimensions.WIDTH,this.canvas.height=this.dimensions.HEIGHT,Runner.updateCanvasScaling(this.canvas),this.distanceMeter.calcXPos(this.dimensions.WIDTH),this.tRex.calcXPos(this.dimensions.WIDTH),this.clearCanvas(),this.horizon.update(0,0,!0),this.tRex.update(0),this.tRex.updateBullets(),this.distanceMeter.update(0,Math.ceil(this.distanceRan)),this.activated||this.crashed||this.paused?(this.containerEl.style.width=this.dimensions.WIDTH+"px",this.containerEl.style.height=this.dimensions.HEIGHT+"px",this.stop()):this.tRex.draw(0,0),this.crashed&&this.gameOverPanel&&(this.gameOverPanel.updateDimensions(this.dimensions.WIDTH),this.gameOverPanel.draw()))},playIntro:function(){if(this.started||this.crashed)this.crashed&&this.restart();else{this.playingIntro=!0,this.tRex.playingIntro=!0;var t="@-webkit-keyframes intro { from { width:"+Trex.config.WIDTH+"px }to { width: "+this.dimensions.WIDTH+"px }}";document.styleSheets[0].insertRule(t,0),this.containerEl.addEventListener(Runner.events.ANIM_END,this.startGame.bind(this)),this.containerEl.style.webkitAnimation="intro .4s ease-out 1 both",this.containerEl.style.width=this.dimensions.WIDTH+"px",this.touchController&&this.outerContainerEl.appendChild(this.touchController),this.activated=!0,this.started=!0}},startGame:function(){this.runningTime=0,this.playingIntro=!1,this.tRex.playingIntro=!1,this.containerEl.style.webkitAnimation="",this.playCount++,document.addEventListener(Runner.events.VISIBILITY,this.onVisibilityChange.bind(this)),window.addEventListener(Runner.events.BLUR,this.onVisibilityChange.bind(this)),window.addEventListener(Runner.events.FOCUS,this.onVisibilityChange.bind(this))},clearCanvas:function(){this.canvasCtx.clearRect(0,0,this.dimensions.WIDTH,this.dimensions.HEIGHT)},update:function(){this.drawPending=!1;var t=getTimeStamp(),i=t-(this.time||t);if(this.time=t,this.activated){this.clearCanvas(),this.tRex.jumping&&this.tRex.updateJump(i),this.runningTime+=i;var s=this.runningTime>this.config.CLEAR_TIME,e=!!this.tRex.bullets.length;1!=this.tRex.jumpCount||this.playingIntro||this.playIntro(),this.playingIntro?this.horizon.update(0,this.currentSpeed,s):(i=this.started?i:0,this.horizon.update(i,this.currentSpeed,s,this.inverted)),this.started&&this.updateBullets(this.tRex.xPos,this.tRex.yPos,this.tRex.ducking);var n=s&&checkForCollision(this.horizon.obstacles[0],this.tRex),o=e&&s&&checkBulletCollision(this.horizon.obstacles[0],this.tRex.bullets[0]);o&&s&&1===this.horizon.obstacles[0].shouldShotTimes&&this.cleanBulletAndObstacle(),o&&s&&this.horizon.obstacles[0]&&1<this.horizon.obstacles[0].shouldShotTimes&&(this.horizon.obstacles[0].shouldShotTimes--,this.cleanBullet()),n?this.gameOver():(this.distanceRan+=this.currentSpeed*i/this.msPerFrame,this.currentSpeed<this.config.MAX_SPEED&&(this.currentSpeed+=this.config.ACCELERATION)),this.distanceMeter.update(i,Math.ceil(this.distanceRan))&&this.playSound(this.soundFx.SCORE),this.distanceMeter.acheivement&&this.canIncreaseBulletOnce&&(this.tRex.bulletsAmounts++,this.canIncreaseBulletOnce=!1,this.shootTip&&(this.shootTip.style.opacity=1),this.timer||(this.timer=setTimeout(function(){this.canIncreaseBulletOnce=!0,this.shootTip=null,clearTimeout(this.timer),this.timer=null}.bind(this),1e3/60*8))),this.tRex.updateBulletAmounts()}this.crashed||(this.tRex.update(i),this.raq())},updateBullets:function(t,i,s){s&&(i+=this.tRex.config.HEIGHT-this.tRex.config.HEIGHT_DUCK-Bullet.config.OFFSET_TOP);for(var e=this.tRex.bullets.slice(0),n=0;n<e.length;n++)e[n].update(t,i),e[n].remove&&e.shift();this.tRex.bullets=e},handleEvent:function(s){return function(t,i){switch(t){case i.KEYDOWN:case i.TOUCHSTART:case i.MOUSEDOWN:this.onKeyDown(s);break;case i.KEYUP:case i.TOUCHEND:case i.MOUSEUP:this.onKeyUp(s)}}.bind(this)(s.type,Runner.events)},startListening:function(){document.addEventListener(Runner.events.KEYDOWN,this),document.addEventListener(Runner.events.KEYUP,this),IS_MOBILE?(this.touchController.addEventListener(Runner.events.TOUCHSTART,this),this.touchController.addEventListener(Runner.events.TOUCHEND,this),this.containerEl.addEventListener(Runner.events.TOUCHSTART,this)):(document.addEventListener(Runner.events.MOUSEDOWN,this),document.addEventListener(Runner.events.MOUSEUP,this))},stopListening:function(){document.removeEventListener(Runner.events.KEYDOWN,this),document.removeEventListener(Runner.events.KEYUP,this),IS_MOBILE?(this.touchController.removeEventListener(Runner.events.TOUCHSTART,this),this.touchController.removeEventListener(Runner.events.TOUCHEND,this),this.containerEl.removeEventListener(Runner.events.TOUCHSTART,this)):(document.removeEventListener(Runner.events.MOUSEDOWN,this),document.removeEventListener(Runner.events.MOUSEUP,this))},onKeyDown:function(t){IS_MOBILE&&t.preventDefault(),t.target!=this.detailsButton&&(this.crashed||!Runner.keycodes.JUMP[t.keyCode]&&t.type!=Runner.events.TOUCHSTART||(this.activated||(this.loadSounds(),this.activated=!0),this.tRex.jumping||this.tRex.ducking||(this.playSound(this.soundFx.BUTTON_PRESS),this.tRex.startJump(this.currentSpeed))),Runner.keycodes.SHOT[t.keyCode]&&this.shootAction.call(this.tRex),this.crashed&&t.type==Runner.events.TOUCHSTART&&t.currentTarget==this.containerEl&&this.restart()),this.activated&&!this.crashed&&Runner.keycodes.DUCK[t.keyCode]&&(t.preventDefault(),this.tRex.jumping?this.tRex.setSpeedDrop():this.tRex.jumping||this.tRex.ducking||this.tRex.setDuck(!0))},onKeyUp:function(t){var i=String(t.keyCode),s=Runner.keycodes.JUMP[i]||t.type==Runner.events.TOUCHEND||t.type==Runner.events.MOUSEDOWN;if(this.isRunning()&&s)this.tRex.endJump();else if(Runner.keycodes.DUCK[i])this.tRex.speedDrop=!1,this.tRex.setDuck(!1);else if(this.crashed){var e=getTimeStamp()-this.time;(Runner.keycodes.RESTART[i]||this.isLeftClickOnCanvas(t)||e>=this.config.GAMEOVER_CLEAR_TIME&&Runner.keycodes.JUMP[i])&&this.restart()}else this.paused&&s&&(this.tRex.reset(),this.play())},isLeftClickOnCanvas:function(t){return null!=t.button&&t.button<2&&t.type==Runner.events.MOUSEUP&&t.target==this.canvas},raq:function(){this.drawPending||(this.drawPending=!0,this.raqId=requestAnimationFrame(this.update.bind(this)))},isRunning:function(){return!!this.raqId},cleanBulletAndObstacle:function(){var t=this.tRex.bullets.slice(0),i=this.horizon.obstacles.slice(0);t.shift(),this.tRex.bullets=t,i.shift(),this.horizon.obstacles=i},cleanBullet:function(){var t=this.tRex.bullets.slice(0);t.shift(),this.tRex.bullets=t},gameOver:function(){this.playSound(this.soundFx.HIT),vibrate(200),this.stop(),this.crashed=!0,this.distanceMeter.acheivement=!1,this.tRex.update(100,Trex.status.CRASHED),this.gameOverPanel?this.gameOverPanel.draw():this.gameOverPanel=new GameOverPanel(this.canvas,this.spriteDef.TEXT_SPRITE,this.spriteDef.RESTART,this.dimensions),this.distanceRan>this.highestScore&&(this.highestScore=Math.ceil(this.distanceRan),this.distanceMeter.setHighScore(this.highestScore)),cscr=this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan)),this.time=getTimeStamp()},stop:function(){this.activated=!1,this.paused=!0,cancelAnimationFrame(this.raqId),this.raqId=0},play:function(){this.crashed||(this.activated=!0,this.paused=!1,this.tRex.update(0,Trex.status.RUNNING),this.time=getTimeStamp(),this.update())},restart:function(){this.raqId||(this.playCount++,this.runningTime=0,this.activated=!0,this.crashed=!1,this.distanceRan=0,this.canIncreaseBulletOnce=!0,this.setSpeed(this.config.SPEED),this.time=getTimeStamp(),this.containerEl.classList.remove(Runner.classes.CRASHED),this.clearCanvas(),this.distanceMeter.reset(this.highestScore),this.horizon.reset(),this.tRex.reset(),this.tRex.bulletsAmounts=0,this.playSound(this.soundFx.BUTTON_PRESS),this.invert(!0),this.update())},onVisibilityChange:function(t){document.hidden||document.webkitHidden||"blur"==t.type||"visible"!=document.visibilityState?this.stop():this.crashed||(this.tRex.reset(),this.play())},playSound:function(t){if(t){var i=this.audioContext.createBufferSource();i.buffer=t,i.connect(this.audioContext.destination),i.start(0)}},invert:function(t){t?(document.body.classList.toggle(Runner.classes.INVERTED,!1),this.invertTimer=0,this.inverted=!1):this.inverted=document.body.classList.toggle(Runner.classes.INVERTED,this.invertTrigger)}},Runner.updateCanvasScaling=function(t,i,s){var e=t.getContext("2d"),n=Math.floor(window.devicePixelRatio)||1,o=Math.floor(e.webkitBackingStorePixelRatio)||1,h=n/o;if(n!==o){var a=i||t.width,r=s||t.height;return t.width=a*h,t.height=r*h,t.style.width=a+"px",t.style.height=r+"px",e.scale(h,h),!0}return 1==n&&(t.style.width=t.width+"px",t.style.height=t.height+"px"),!1},Obstacle.MAX_GAP_COEFFICIENT=1.5,Obstacle.MAX_OBSTACLE_LENGTH=3,Obstacle.prototype={init:function(t){if(this.cloneCollisionBoxes(),1<this.size&&this.typeConfig.multipleSpeed>t&&(this.size=1),"PTERODACTYL"===this.typeConfig.type?this.shouldShotTimes=2:this.shouldShotTimes=this.size,this.width=this.typeConfig.width*this.size,Array.isArray(this.typeConfig.yPos)){var i=IS_MOBILE?this.typeConfig.yPosMobile:this.typeConfig.yPos;this.yPos=i[getRandomNum(0,i.length-1)]}else this.yPos=this.typeConfig.yPos;this.draw(),1<this.size&&(this.collisionBoxes[1].width=this.width-this.collisionBoxes[0].width-this.collisionBoxes[2].width,this.collisionBoxes[2].x=this.width-this.collisionBoxes[2].width),this.typeConfig.speedOffset&&(this.speedOffset=.5<Math.random()?this.typeConfig.speedOffset:-this.typeConfig.speedOffset),this.gap=this.getGap(this.gapCoefficient,t)},draw:function(){var t=this.typeConfig.width,i=this.typeConfig.height;IS_HIDPI&&(t*=2,i*=2);var s=t*this.size*(.5*(this.size-1))+this.spritePos.x;0<this.currentFrame&&(s+=t*this.currentFrame),this.canvasCtx.drawImage(Runner.imageSprite,s,this.spritePos.y,t*this.size,i,this.xPos,this.yPos,this.typeConfig.width*this.size,this.typeConfig.height)},update:function(t,i){this.remove||(this.typeConfig.speedOffset&&(i+=this.speedOffset),this.xPos-=Math.floor(i*FPS/1e3*t),this.typeConfig.numFrames&&(this.timer+=t,this.timer>=this.typeConfig.frameRate&&(this.currentFrame=this.currentFrame==this.typeConfig.numFrames-1?0:this.currentFrame+1,this.timer=0)),this.draw(),this.isVisible()||(this.remove=!0))},getGap:function(t,i){var s=Math.round(this.width*i+this.typeConfig.minGap*t);return getRandomNum(s,Math.round(s*Obstacle.MAX_GAP_COEFFICIENT))},isVisible:function(){return 0<this.xPos+this.width},cloneCollisionBoxes:function(){for(var t=this.typeConfig.collisionBoxes,i=t.length-1;0<=i;i--)this.collisionBoxes[i]=new CollisionBox(t[i].x,t[i].y,t[i].width,t[i].height)}},Obstacle.types=[{type:"CACTUS_SMALL",width:17,height:35,yPos:105,multipleSpeed:4,minGap:120,minSpeed:0,collisionBoxes:[new CollisionBox(0,7,5,27),new CollisionBox(4,0,6,34),new CollisionBox(10,4,7,14)]},{type:"CACTUS_LARGE",width:25,height:50,yPos:90,multipleSpeed:7,minGap:120,minSpeed:0,collisionBoxes:[new CollisionBox(0,12,7,38),new CollisionBox(8,0,7,49),new CollisionBox(13,10,10,38)]},{type:"PTERODACTYL",width:46,height:40,yPos:[100,75,50],yPosMobile:[100,50],multipleSpeed:999,minSpeed:8.5,minGap:150,collisionBoxes:[new CollisionBox(15,15,16,5),new CollisionBox(18,21,24,6),new CollisionBox(2,14,4,3),new CollisionBox(6,10,4,7),new CollisionBox(10,8,6,9)],numFrames:2,frameRate:1e3/6,speedOffset:.8}],NightMode.config={FADE_SPEED:.035,HEIGHT:40,MOON_SPEED:.25,NUM_STARS:2,STAR_SIZE:9,STAR_SPEED:.3,STAR_MAX_Y:70,WIDTH:20},NightMode.phases=[140,120,100,60,40,20,0],NightMode.prototype={update:function(t,i){if(t&&0==this.opacity&&(this.currentPhase++,this.currentPhase>=NightMode.phases.length&&(this.currentPhase=0)),t&&(this.opacity<1||0==this.opacity)?this.opacity+=NightMode.config.FADE_SPEED:0<this.opacity&&(this.opacity-=NightMode.config.FADE_SPEED),0<this.opacity){if(this.xPos=this.updateXPos(this.xPos,NightMode.config.MOON_SPEED),this.drawStars)for(var s=0;s<NightMode.config.NUM_STARS;s++)this.stars[s].x=this.updateXPos(this.stars[s].x,NightMode.config.STAR_SPEED);this.draw()}else this.opacity=0,this.placeStars();this.drawStars=!0},updateXPos:function(t,i){return t<-NightMode.config.WIDTH?t=this.containerWidth:t-=i,t},draw:function(){var t=3==this.currentPhase?2*NightMode.config.WIDTH:NightMode.config.WIDTH,i=NightMode.config.HEIGHT,s=this.spritePos.x+NightMode.phases[this.currentPhase],e=t,n=NightMode.config.STAR_SIZE,o=Runner.spriteDefinition.LDPI.STAR.x;if(IS_HIDPI&&(t*=2,i*=2,s=this.spritePos.x+2*NightMode.phases[this.currentPhase],n*=2,o=Runner.spriteDefinition.HDPI.STAR.x),this.canvasCtx.save(),this.canvasCtx.globalAlpha=this.opacity,this.drawStars)for(var h=0;h<NightMode.config.NUM_STARS;h++)this.canvasCtx.drawImage(Runner.imageSprite,o,this.stars[h].sourceY,n,n,Math.round(this.stars[h].x),this.stars[h].y,NightMode.config.STAR_SIZE,NightMode.config.STAR_SIZE);this.canvasCtx.drawImage(Runner.imageSprite,s,this.spritePos.y,t,i,Math.round(this.xPos),this.yPos,e,NightMode.config.HEIGHT),this.canvasCtx.globalAlpha=1,this.canvasCtx.restore()},placeStars:function(){for(var t=Math.round(this.containerWidth/NightMode.config.NUM_STARS),i=0;i<NightMode.config.NUM_STARS;i++)this.stars[i]={},this.stars[i].x=getRandomNum(t*i,t*(i+1)),this.stars[i].y=getRandomNum(0,NightMode.config.STAR_MAX_Y),this.stars[i].sourceY=IS_HIDPI?Runner.spriteDefinition.HDPI.STAR.y+2*NightMode.config.STAR_SIZE*i:Runner.spriteDefinition.LDPI.STAR.y+NightMode.config.STAR_SIZE*i},reset:function(){this.currentPhase=0,this.opacity=0,this.update(!1)}},Cloud.config={HEIGHT:14,MAX_CLOUD_GAP:400,MAX_SKY_LEVEL:30,MIN_CLOUD_GAP:100,MIN_SKY_LEVEL:71,WIDTH:46},Cloud.prototype={init:function(){this.yPos=getRandomNum(Cloud.config.MAX_SKY_LEVEL,Cloud.config.MIN_SKY_LEVEL),this.draw()},draw:function(){this.canvasCtx.save();var t=Cloud.config.WIDTH,i=Cloud.config.HEIGHT;IS_HIDPI&&(t*=2,i*=2),this.canvasCtx.drawImage(Runner.imageSprite,this.spritePos.x,this.spritePos.y,t,i,this.xPos,this.yPos,Cloud.config.WIDTH,Cloud.config.HEIGHT),this.canvasCtx.restore()},update:function(t){this.remove||(this.xPos-=Math.ceil(t),this.draw(),this.isVisible()||(this.remove=!0))},isVisible:function(){return 0<this.xPos+Cloud.config.WIDTH}},Horizon.config={BG_CLOUD_SPEED:.2,BUMPY_THRESHOLD:.3,CLOUD_FREQUENCY:.5,HORIZON_HEIGHT:16,MAX_CLOUDS:6},Horizon.prototype={init:function(){this.addCloud(),this.horizonLine=new HorizonLine(this.canvas,this.spritePos.HORIZON)},update:function(t,i,s,e){this.runningTime+=t,this.horizonLine.update(t,i),this.updateClouds(t,i),s&&this.updateObstacles(t,i)},updateClouds:function(t,i){var s=this.cloudSpeed/1e3*t*i,e=this.clouds.length;if(e){for(var n=e-1;0<=n;n--)this.clouds[n].update(s);var o=this.clouds[e-1];e<this.config.MAX_CLOUDS&&this.dimensions.WIDTH-o.xPos>o.cloudGap&&this.cloudFrequency>Math.random()&&this.addCloud(),this.clouds=this.clouds.filter(function(t){return!t.remove})}else this.addCloud()},updateObstacles:function(t,i){for(var s=this.obstacles.slice(0),e=0;e<this.obstacles.length;e++){var n=this.obstacles[e];n.update(t,i),n.remove&&s.shift()}if(this.obstacles=s,0<this.obstacles.length){var o=this.obstacles[this.obstacles.length-1];o&&!o.followingObstacleCreated&&o.isVisible()&&o.xPos+o.width+o.gap<this.dimensions.WIDTH&&(this.addNewObstacle(i),o.followingObstacleCreated=!0)}else this.addNewObstacle(i)},removeFirstObstacle:function(){this.obstacles.shift()},addNewObstacle:function(t){var i=getRandomNum(0,Obstacle.types.length-1),s=Obstacle.types[i];if(this.duplicateObstacleCheck(s.type)||t<s.minSpeed)this.addNewObstacle(t);else{var e=this.spritePos[s.type];this.obstacles.push(new Obstacle(this.canvasCtx,s,e,this.dimensions,this.gapCoefficient,t,s.width)),this.obstacleHistory.unshift(s.type),1<this.obstacleHistory.length&&this.obstacleHistory.splice(Runner.config.MAX_OBSTACLE_DUPLICATION)}},duplicateObstacleCheck:function(t){for(var i=0,s=0;s<this.obstacleHistory.length;s++)i=this.obstacleHistory[s]==t?i+1:0;return i>=Runner.config.MAX_OBSTACLE_DUPLICATION},reset:function(){this.obstacles=[],this.horizonLine.reset()},resize:function(t,i){this.canvas.width=t,this.canvas.height=i},addCloud:function(){this.clouds.push(new Cloud(this.canvas,this.spritePos.CLOUD,this.dimensions.WIDTH))}},GameOverPanel.dimensions={TEXT_X:0,TEXT_Y:13,TEXT_WIDTH:191,TEXT_HEIGHT:11,RESTART_WIDTH:36,RESTART_HEIGHT:32},GameOverPanel.prototype={updateDimensions:function(t,i){this.canvasDimensions.WIDTH=t,i&&(this.canvasDimensions.HEIGHT=i)},draw:function(){var t=GameOverPanel.dimensions,i=this.canvasDimensions.WIDTH/2,s=t.TEXT_X,e=t.TEXT_Y,n=t.TEXT_WIDTH,o=t.TEXT_HEIGHT,h=Math.round(i-t.TEXT_WIDTH/2),a=Math.round((this.canvasDimensions.HEIGHT-25)/3),r=t.TEXT_WIDTH,c=t.TEXT_HEIGHT,u=t.RESTART_WIDTH,d=t.RESTART_HEIGHT,l=i-t.RESTART_WIDTH/2,T=this.canvasDimensions.HEIGHT/2;IS_HIDPI&&(e*=2,s*=2,n*=2,o*=2,u*=2,d*=2),s+=this.textImgPos.x,e+=this.textImgPos.y,this.canvasCtx.drawImage(Runner.imageSprite,s,e,n,o,h,a,r,c),this.canvasCtx.drawImage(Runner.imageSprite,this.restartImgPos.x,this.restartImgPos.y,u,d,l,T,t.RESTART_WIDTH,t.RESTART_HEIGHT)}},DistanceMeter.dimensions={WIDTH:10,HEIGHT:13,DEST_WIDTH:11},DistanceMeter.yPos=[0,13,27,40,53,67,80,93,107,120],DistanceMeter.config={MAX_DISTANCE_UNITS:6,ACHIEVEMENT_DISTANCE:100,COEFFICIENT:.025,FLASH_DURATION:250,FLASH_ITERATIONS:3},DistanceMeter.prototype={init:function(t){var i="";this.calcXPos(t),this.maxScore=this.maxScoreUnits;for(var s=0;s<this.maxScoreUnits;s++)this.draw(s,0),this.defaultString+="0",i+="9";this.maxScore=parseInt(i)},calcXPos:function(t){this.x=t-DistanceMeter.dimensions.DEST_WIDTH*(this.maxScoreUnits+1)},draw:function(t,i,s){var e=DistanceMeter.dimensions.WIDTH,n=DistanceMeter.dimensions.HEIGHT,o=DistanceMeter.dimensions.WIDTH*i,h=0,a=t*DistanceMeter.dimensions.DEST_WIDTH,r=this.y,c=DistanceMeter.dimensions.WIDTH,u=DistanceMeter.dimensions.HEIGHT;if(IS_HIDPI&&(e*=2,n*=2,o*=2),o+=this.spritePos.x,h+=this.spritePos.y,this.canvasCtx.save(),s){var d=this.x-2*this.maxScoreUnits*DistanceMeter.dimensions.WIDTH;this.canvasCtx.translate(d,this.y)}else this.canvasCtx.translate(this.x,this.y);this.canvasCtx.drawImage(this.image,o,h,e,n,a,r,c,u),this.canvasCtx.restore()},getActualDistance:function(t){return t?Math.round(t*this.config.COEFFICIENT):0},update:function(t,i){var s=!1;if(this.acheivement)this.acheivement=!1,this.flashIterations=0,this.flashTimer=0;else if((i=this.getActualDistance(i))>this.maxScore&&this.maxScoreUnits==this.config.MAX_DISTANCE_UNITS?(this.maxScoreUnits++,this.maxScore=parseInt(this.maxScore+"9")):this.distance=0,0<i){i%this.config.ACHIEVEMENT_DISTANCE==0&&(this.acheivement=!0,s=!(this.flashTimer=0));var e=(this.defaultString+i).substr(-this.maxScoreUnits);this.digits=e.split("")}else this.digits=this.defaultString.split("");for(var n=this.digits.length-1;0<=n;n--)this.draw(n,parseInt(this.digits[n]));return this.drawHighScore(),s},drawHighScore:function(){this.canvasCtx.save(),this.canvasCtx.globalAlpha=.8;for(var t=this.highScore.length-1;0<=t;t--)this.draw(t,parseInt(this.highScore[t],10),!0);this.canvasCtx.restore()},setHighScore:function(t){t=this.getActualDistance(t);var i=(this.defaultString+t).substr(-this.maxScoreUnits);this.highScore=["10","11",""].concat(i.split(""))},reset:function(){this.update(0),this.acheivement=!1}};