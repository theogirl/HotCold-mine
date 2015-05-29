$(document).ready (function() {

$('.userinput').focus();


// -------FUNCTIONS---------//

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  // end getRandomInt function

function newGame() {
	var userGuesses = [];
	var userScore = 0;
	var winner = false;
	var x = getRandomInt(1, 100); // generate a random integer btwn 1 and 100
	
	while (winner == false) {
			validateNumber();	
		} // end while loop
} // end newGame


}); // end document ready