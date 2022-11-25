// Rock, Paper, Scissors Game

// Initialise game counters
var userWins = 0;
var userLosses = 0;
var ties = 0;

// Run game ten times
for (var i = 0; i < 10; i++) {
    // Randomly generate computer choice
    var computerOptions = ["rock", "paper", "scissors"];
    var randomNumber = Math.random();
    var computerChoice = computerOptions[Math.floor(randomNumber * 3)];

    // Get user choice
    var validChoice = false;
    var userChoice = prompt("Rock, Paper or Scissors?");
    userChoice = userChoice.toLowerCase();

    // Convert single letters into words
    if (userChoice === "r") {
        userChoice = "rock";
    }
    else if (userChoice === "p") {
        userChoice = "paper";
    }
    else if (userChoice === "s") {
        userChoice = "scissors";
    }

    // Announce choices...
    if  (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        validChoice = true;  
        alert("You chose " + userChoice + ".  The computer chose " + computerChoice + ".");
    }
    // ...or alert for invalid input 
    else {
        alert("You didn't enter a valid input.  The computer chose " + computerChoice + ", but it's pretty academic at this point.  You still have " + (9-i) + " chances.  Have another try...");
    }

    // Check for a draw
    if (userChoice === computerChoice) {
        ties++;
        alert("This is a draw");
    } 
    
    // Ascertain winner
    else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
            userWins++;
            alert(
                "You win - you now have " + userWins + " win/s!"
                );
            } else {
                userLosses++;
                alert(
                "Unlucky, your rock has been papered!  You have now lost " +
                userLosses +
                " time/s."
            );
            }
    }
    else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                userLosses++;
                alert(
                    "Oh dear, you lost - that's " + userLosses + " losses in total now"
                );
            } else {
                userWins++;
                alert(
                    "BOOOOOM, that's " + userWins + " now!"
                );
            }
    }
    else if (userChoice === "scissors") {
            if (computerChoice === "paper") {
                userWins++;
                alert(
                    "Like scissors through paper! You now have " + userWins + " wins - Tremenous!"
                    );
            } else {
                userLosses++;
                alert("Those rocks are tough!  The computer has beaten you " + userLosses + " time/s.");
            }
    }

    // After 10 rounds, show stats on alert 
    var winRate = (userWins / (i+1)) * 100;
    console.log("Games played: " + (i+1) + ".  wins: " + userWins + ".  You have won " + winRate.toFixed(2) + "% of your games.");
}

// Some conditional end messages 
var userWinsMsg = (winRate.toFixed(0) + "%");
if (userWins === 0) {
    userWinsMsg = "none";
}

alert("Games played: " + (i) + ".  wins: " + userWins + ".  loses: " + userLosses + ". Ties: " + ties + ".  You won " + userWinsMsg + " of your games.");
if (userWins > 5) {
    alert("You did really well - you won " + userWins + "rounds!")
}
else if (userLosses > 5) {
    alert(userLosses + " losses!  Oh dear!")
}
else if ((userWins + userLosses + ties) < 5) {
    alert("Most of your choices were invalid in this game.  Why not try again, you can just type 'r', 'p', or 's' if you like...")
}
