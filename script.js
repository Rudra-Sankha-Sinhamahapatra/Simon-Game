
var buttonColours=["red","blue","green","yellow"];

var gamepattern=[];
var userClickedPattern=[];

var started=false;

var level=0;


$(document).on('keypress',function(event){
  if(!started){
    $("#level-title").text("Level "+level);
  nextSequence();
  started=true;
  }
   });
  

$(".btn").click(function(){
   var userChosenColour=$(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
if(gamepattern[currentLevel]===userClickedPattern[currentLevel]){
  console.log("Success");
  if(userClickedPattern.length===gamepattern.length){
    setTimeout(function(){
    nextSequence();
    },1000);
  }
}
else{
  console.log("wrong");
playSound("wrong");

$("body").addClass("game-over");
setTimeout(function(){
$("body").removeClass("game-over");
},200);
$("#level-title").text("Game Over,Press Any key to Restart");
startOver();
}
}
function startOver(){
  level=0;
  gamepattern=[];

  started=false;
}

function nextSequence(){
 userClickedPattern=[];
  level++;

  $("#level-title").text("Level "+level);
    var randomNumber=Math.round(Math.random()*3);
  
var randomChosenColour=buttonColours[randomNumber];


  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
gamepattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColour);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}


function animatePress(currentColour) {
  $("#"+currentColour).addClass('pressed');
  setTimeout(function(){
  $("#"+currentColour).removeClass('pressed');
  },100);
  }

