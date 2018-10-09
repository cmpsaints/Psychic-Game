// Global Variables (being lazy with variable declarations)

var correct = 0;
var incorrect = 0;
var psychicChoice = "";
var userGuess = "";
var guessesLeft = 9;
var guessesSoFar = [];


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Chooses random letter from alphabet array, this is psychic's choice
var psychic = function() {
	psychicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	// console.log(psychicChoice);
}



// Start game, create random choice by psychic
psychic();

// Detect key guess -- compare -- output results
document.onkeyup = function(event) {

    for (var i = 0; i < alphabet.length; i++) {
        if (event.key.toLowerCase() === alphabet[i]) {

            userGuess = event.key.toLowerCase();
            
            // console.log(userGuess);

            compareAndOutput();
        }
	}
}



// Function to compare key guess & psychic choice -- then output results
var compareAndOutput = function() {
    if (userGuess == psychicChoice) {
		correct++;
		alertWin();
    }

    if (userGuess != psychicChoice) {
        guessesLeft--;
        guessesSoFar.push(" " + userGuess);

        // Create string of inner HTML before passing to DIV
        var html = 
            "<p>Wins</p>" + 
            "<p>" + correct + "</p>" +
            "<p>Losses</p>" + 
            "<p>" + incorrect + "</p>" +
            "<br>" +
            "<p>Guesses Left</p>" +
            "<p>" + guessesLeft + "</p>" +
            "<p>Your Guesses so far</p>" + 
            "<p>" + guessesSoFar + "</p>";

        // Set inner HTML string as content of #game_output DIV
        document.querySelector("#game_output").innerHTML = html;

        if (guessesLeft === 0) {
            incorrect++;
            alertLoss();
        }
    }
}


// Report result to player as an alert
var alertWin = function() {
	alert("You win this round. I was thinking of " + "'" + psychicChoice + "'" + ".");
	resetGame();
}

var alertLoss = function() {
	alert("You are incorrect. I was thinking of " + "'" + psychicChoice + "'" + ". " + "You Guessed " + "'" + userGuess + "'" + ".");
	resetGame();
}


// Function to reset game to original settings
var resetGame = function() {
	guessesLeft = 9;
    guessesSoFar = [];

    // Create string of inner HTML before passing to DIV
    var html = 
    "<p>Wins</p>" + 
    "<p>" + correct + "</p>" +
    "<p>Losses</p>" + 
    "<p>" + incorrect + "</p>" +
    "<br>" +
    "<p>Guesses Left</p>" +
    "<p>" + guessesLeft + "</p>" +
    "<p>Your Guesses so far</p>" + 
    "<p></p>";

    // Set inner HTML string as content of #game_output DIV
    document.querySelector("#game_output").innerHTML = html;

	psychic();
}