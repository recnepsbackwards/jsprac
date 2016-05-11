//While loop to count to 100 and if statement to print fizzbuzz
while (count < 100) {
  if (count % 15 === 0) {
    console.log ("fizzbuzz");
  }
  else if (count % 3 === 0) {
    console.log ("fizz");
  }
  else if (count % 5 === 0){
    console.log ("buzz");
  }
  else {console.log (count); }
  count = count + 1;
}

//What's bigger number practice
function greaterNum(a,b) {
  if (a>b)  {
    console.log(a + " is greater than " + b);
  }
  else if (a===b) {
    console.log(a + " and " + b + " are equal");
  }
  else {
    console.log(b + " is greater than " + a);
  }
}

//word translator 1
function helloWorld(language) {
  if (language==="fr") {
    console.log("Bonjour tout le monde!");
  }
  else if (language==="es") {
    console.log("Hola!");
  }
  else if (language==="de") {
    console.log("Guten tag!");
  }
  else if (language==="en") {
    console.log("Hello, World!");
  }
  else {
    console.log("Hello, World!");
  }
}
//grade assigner
function assignGrade(num) {
  if (100 >= num && num >= 90) {
    return "A";
  }
  else if (90 > num && num >= 80) {
    return "B";
  }
  else if (80 > num && num >= 70) {
    return "C";
  }
  else if (70 > num && num >= 60) {
    return "D";
  }
  else if (num < 60 && num >= 0) {
    return "F";
  }
  else {
    return "Enter a number between 0 and 100."
  }
}

//Pluralizer
function pluaralNoun(num,noun) {
  if (num===1) {
    return 1 + " " + noun;
  }
  else {
    if (noun==="goose") {
      return num + " " + "geese";
    }
    else {
    return num + " " + noun + "s";
    }
  }
}

//Odd or Even
var count = 0;
  while (count <= 15) {
    if (count % 2===0) {
      console.log (count + " is even"); }
    else {
      console.log (count + " is odd"); }
    count = count + 1;
}

//Odd or even as a function

function oddOrEven() {
  var count = 0;
  while (count <= 15) {
    if (count % 2===0) {
      console.log (count + " is even");
    }
    else {
      console.log (count + " is odd");
    }
    count = count + 1;
  }
}

//Hi Lo Game
function hiLoGame() {
  var userName = prompt("Welcome! Enter your name:");
  var secretNumber = (Math.floor(Math.random() * 100) + 1)
  console.log(secretNumber);
  var userGuess = parseInt(prompt("Pick a number between 1 and 100"));
  var count = 1;
  while (secretNumber != userGuess && count < 7){
    if (isNaN(userGuess)) {
      userGuess = parseInt(prompt("You must enter a number between 1 and 100."));
    }
    else if (userGuess > secretNumber) {
      userGuess = parseInt(prompt("Too high. Guess again."));
    }
    else{
      userGuess = parseInt(prompt("Too low. Guess again."));
    }
    count = count + 1;
  }
  if (userGuess === secretNumber){
    alert(userGuess + " is correct! You win! Great job, " + userName + "!");
  }
  else {
      alert("You lose! You suck, " + userName + "!");
  }
}
hiLoGame();

//Reverse words
function reverseWords(wordString) {
  var wordsArray = wordString.split(" ");
  console.log(wordsArray)
}
reverseWords("Hi there neighbor");

//Reverse index
function charFromBack(reverseIndex, string) {
  return string.charAt(string.length-1-reverseIndex);
}
function reverseString(string) {
  var times = 0;
  var result = "";
  while (times < string.length) {
    result = result + charFromBack(times, string);
    times = times + 1;
  }
  console.log(result);
}
