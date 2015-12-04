var points = 0;
var questions = ["Does Paul like beer?", "Is he a fan of Cold War spy novels?", "Is he over 6 feet tall?", "Was he born in Denmark?"];
var answers = ["Boo! Incorrect.", "Sorry, no.  That's not correct.", "That's right!", "That's right! I was born in Denver, CO."];
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");

var playerName = prompt("What's your name?");
alert("Hey " + playerName + ". Thanks for dropping by.");

function ques(quesPrompt, ansBool, corResponse, incorResponse, webElem){
  var answer = prompt(quesPrompt);
  var response;
  if(ansBool === true){
    if(answer.toLowerCase() === "yes" || answer.toLowerCase() === "y"){
      points ++;
      response = corResponse;
    }else{
      response = incorResponse;
    }
  }else{
    if(answer.toLowerCase() === "no" || answer.toLowerCase() === "n"){
      points ++;
      response = corResponse;
    }else{
      response = incorResponse;
    }
  }
  webElem.textContent = response;
}

ques(questions[0], true, answers[2], answers[0], one);
ques(questions[1], true, answers[2], answers[1], two);
ques(questions[2], false, answers[2], answers[0], three);
ques(questions[3], false, answers[3], answers[1], four);

// var questionNum = Math.floor(Math.random() * (100 - 0)) + 0;
// var userGuess = parseInt(prompt("Guess the number I'm thinking of between 1 and 100!"));
// var guesses = 1;
//
// while(userGuess !== questionNum){
//   if (isNaN(userGuess)){
//     guesses ++;
//     userGuess = parseInt(prompt("That's not a number! I can only evaluate numbers; I am literally freaking out."))
//   }else{
//     if(userGuess > questionNum){
//       if((userGuess - questionNum) < 10){
//         userGuess = parseInt(prompt("That number is too high, but you're close."));
//       }
//       else if ((userGuess - questionNum) > 70){
//         userGuess = parseInt(prompt("That number is way too high."));
//       }else{
//         userGuess = parseInt(prompt("That number is too high, try again."));
//       }
//       guesses ++;
//     }else{
//       if((questionNum - userGuess) < 10){
//         userGuess = parseInt(prompt("That number is too low, but you're close."));
//       }
//       else if ((questionNum - userGuess) > 70){
//         userGuess = parseInt(prompt("That number is way too low."));
//       }else{
//         userGuess = parseInt(prompt("That number is too low, try again."));
//       }
//       guesses ++;
//     }
//   }
// }
// alert("Nailed it! Well done. That only took " + guesses + " guesses.")
//
//
// var correctAnswers = ["colorado", "louisiana", "washington"];
// var answerInput = prompt("Please input a state in which Paul has lived at some point in his life.").toLowerCase();
// var correct = false;
//
// for(i = 0; i < correctAnswers.length; i++){
//   if(correctAnswers[i] === answerInput){
//     correct = true;
//     break;
//   }
// }
// if(correct){
//   points ++;
//   alert("You did it, congratulations.  That's correct!");
// }else{
//   alert("Nope, he's never lived there.")
// }
//
//
// if(points > 1){
//   alert("Hey, not bad!  You got " + points + " questions right!");
// }else if(points === 1){
//   alert("That could have gone better.  You got one question right.");
// }else{
//   alert("You didn't get any points!");
// }
