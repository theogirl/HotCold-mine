$(document).ready (function() {

$('.userinput').focus();
newGame();

function newGame() {
	var userGuesses = [];
	var userScore = 0;
	var winner = false;
	var x = getRandomInt(1, 100); 
	
	while (winner == false) {
		validateNumber();
	} // end while loop
} // end new game

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  // end getRandomInt function

function validateNumber() {
	for (i=1; if (1 <5); i++) {
		winner = true;
	}
}


}); // end document ready