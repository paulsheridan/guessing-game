var playerName = prompt("Hey there, what's your name?");
var points = 0;

alert("Hey " + playerName + ". Thanks for dropping by.")
var question1 = prompt("Question 1: Does Paul like beer?");
if(question1 === "yes" || question1 === "Yes" || question1 === "YES" || question1 === "y" || question1 === "Y"){
  points ++;
  alert("You know it!");
}else{
  alert("Boo! Incorrect.");
}
var question2 = prompt("Question 2: Is Paul a fan of Cold War spy novels?");
if(question2 === "yes" || question2 === "Yes" || question2 === "YES" || question2 === "y" || question2 === "Y"){
  points ++;
  alert("That's correct!");
}else{
  alert("Sorry, no. That's not correct")
}
var question3 = prompt("Question 3: Is he over 6 feet tall?");
if(question3 === "no" || question3 === "No" || question3 === "NO" || question3 === "n" || question3 === "N"){
  points ++;
  alert("That's right!");
}else{
  alert("Nope, wrong. Sorry.");
}
var question4 = prompt("Question 4: Was Paul born in Denmark?");
if(question4 === "no" || question4 === "No" || question4 === "NO" || question4 === "n" || question4 === "N"){
  points ++;
  alert("That's right! I was born in Denver, CO.");
}else{
  alert("Nope, Denver CO born!");
}
var questionNum = Math.floor(Math.random() * (100 - 0)) + 0;
var userGuess = parseInt(prompt("Last question: Guess the number I'm thinking of between 1 and 100!"));
var guesses = 1;

//I chose not to give a point for the number guessing game.  Since there's no way to get it wrong, it would make the "zero points" alert pointless

while(userGuess !== questionNum){
  if (isNaN(userGuess)){
    guesses ++;
    userGuess = parseInt(prompt("That's not a number! I can only evaluate numbers; I am literally freaking out."))
  }else{
    if(userGuess > questionNum){
      if((userGuess - questionNum) < 10){
        userGuess = parseInt(prompt("That number is too high, but you're close."));
      }
      else if ((userGuess - questionNum) > 70){
        userGuess = parseInt(prompt("That number is way too high."));
      }else{
        userGuess = parseInt(prompt("That number is too high, try again."));
      }
      guesses ++;
    }else{
      if((questionNum - userGuess) < 10){
        userGuess = parseInt(prompt("That number is too low, but you're close."));
      }
      else if ((questionNum - userGuess) > 70){
        userGuess = parseInt(prompt("That number is way too low."));
      }else{
        userGuess = parseInt(prompt("That number is too low, try again."));
      }
      guesses ++;
    }
  }
}
alert("Nailed it! Well done. That only took " + guesses + " guesses.")

var correctAnswers = ["colorado", "louisiana", "washington"];
var answerInput = prompt("Please input a state in which Paul has lived at some point in his life.").toLowerCase();
var correct = false;

for(i = 0; i < correctAnswers.length; i++){
  if(correctAnswers[i] === answerInput){
    correct = true;
    break;
  }
}
if(correct){
  points ++;
  alert("You did it, congratulations.  That's correct!");
}else{
  alert("Nope, he's never lived there.")
}

if(points > 1){
  alert("Hey, not bad!  You got " + points + " questions right!");
}else if(points === 1){
  alert("That could have gone better.  You got one question right.");
}else{
  alert("You didn't get any points!")
}
