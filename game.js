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
var question5 = prompt("Last question: How old is Paul?");
var questionNum = parseInt(question5);
if(questionNum === 28){
  points ++;
  alert("Nice work, you nailed it!");
}else if(questionNum > 28){
  alert("Too high, I'm offended! Nah, just kidding, I'm not offended. You are wrong though.")
}else{
  alert("That's a little young, but good try.")
}

if(points > 1){
  alert("Hey, not bad!  You got " + points + " questions right!");
}else if(points = 1){
  alert("That could have gone better.  You got one question right.");
}else{
  alert("You didn't get any points!")
}
