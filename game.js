var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = true;
var level = 0;

//start new game on key press; should only happen once
$(document).keydown(function () {
  if (started){
    $("#level-title").text("Level " + level); //??????? level is incremented
    nextSequence();
    started = false;
  }
});

/***************************System Pattern **********************************/

//Randomize a color to be followed by user
function nextSequence(){
  //initialize this array for a new game
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  //Choose random color
  var randomChosenColour = buttonColours[randomNumber];
  //Create a pattern
  gamePattern.push(randomChosenColour);
  //Choose button by id
  //var button1 = $("button").find("#" + randomChosenColour);
  //add animation
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//Play sound
function playSound(name){
  var audio = new Audio(name + ".mp3");
  audio.play();
}

/************************** User Pattern ************************************/

//Detect each clicked button press
$(".btn").on("click",  function (event) {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

//Animate clicking of button
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");},
    100);
}

//Check if user pattern matches system Pattern
function checkAnswer(currentLevel){
  //check sequence one by one click
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(gamePattern.length === userClickedPattern.length){
      //Successful and new level
      setTimeout(function () {
        nextSequence()}, 1000);
    }
  } else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over")},
      200);
      $("h1").text("Game Over, Press Any Key to Restart");

      startOver();
    }
  }

  function startOver(){
    level = 0;
    gamePattern = [];
    started = true;
  }
