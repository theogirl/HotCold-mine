$(document).ready (function() {

$('.userinput').focus();
newGame();


// -------FUNCTIONS---------//

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  // end getRandomInt function

function newGame() {
	var userGuesses = [];
	var userScore = 0;
	var winner = false;
	var x = getRandomInt(1, 100); // generate a random integer btwn 1 and 100
	getGuess();
	validateNumber();
	resetInput();
	compareNumber();
	updateScore();
	recordGuesses();
	
} // end newGame function

function getGuess() {
	$('.userinput').keydown(function(event) { 
		if (event.which == 13) { 
		var y = $(this).val();
}

function resetInput() {
	$('.userinput').val(''); // return input field to blank
	$(this).focus();
}

function validateNumber() {
				if (y == '') { // make sure input is not empty
						alert('Please enter something!');
								}
				else if (y % 1 !== 0) { // make sure input is not a decimal value
						alert('Please enter an integer!');
								}
				else if (isNaN(y)) { // makek sure input is not a string
						alert('Please enter an actual number!');
								}
				else if ((y <= 0) || (y > 100)) { // make sure input is not outside of specified range
						alert('Please enter a number between 1 and 100 only!');
								}
				else {
						return(y);
					} 
} // end validateNumber function

function compareNumber() {
				if (x === y) {
					alert('You won!');
					winner = true;	
				}
				else if (Math.abs(x-y) <= 5) {
					alert('Super Hot!');
					}
				else if (Math.abs(x-y) <= 10) {
					alert('Hot!');
					}
				else if (Math.abs(x-y) <= 25) {
						alert('Warm!');
					}
				else if (Math.abs(x-y) <= 40) {
						alert('Tepid!');
					}
				else if (Math.abs(x-y) <= 60) {
						alert('Cool!');
					}
				else if (Math.abs(x-y) <= 85) {
						alert('Cold!');
					}
				else if (Math.abs(x-y) <= 99) {
						alert('Frozen Arctic');
					}
} // end compareNumber function

function updateScore() {
	userScore++; // increase their attempts count by 1
	$('.userScore').text(userScore);
}

function recordGuesses() {
	userGuesses.push(y); // add user's guess to array
	$('p.numbers').text(userGuesses);
}


}); // end document ready
