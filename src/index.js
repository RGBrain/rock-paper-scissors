// Initialise counter for games
// var gamesPlayed = 0;

// Check that the no of games < 10
// while (gamesPlayed < 10)

// Get user choice
do {
  var userChoice = prompt("Rock, Paper or Scissors?");
} while (userChoice != "");

// var userChoice = prompt("Rock, Paper or Scissors?");
// while (!userChoice) {
//   for (i = 0; i++; i < 10) {
//     userChoice = prompt("Please type either 'Rock', 'Paper' or 'Scissors'?");
//   }
// }

// Get computer choice
var computerOptions = ["Rock", "Paper", "Scissors"];
var randomNumber = Math.random();
var computerChoice = computerOptions[Math.floor(randomNumber * 3)];

console.log(computerChoice);

// }
