$(document).ready (function() {

$('.userinput').focus();
newGame();

// FUNCTION RECIPES

function newGame() {
	var userGuesses = [];
	var userScore = 0;
	var winner = false;
	var x = getRandomInt(1, 100); 


} // end new game

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  // end getRandomInt function

function validateNumber() {
	$('.userinput').keydown(function(event) { 
		if (event.which == 13) { // if user presses Enter key
			// capture user input:
			var y = $(this).val();
			// validate user input:
			if (y == '') { // make sure input is not empty
				alert('Please enter something!');
				location.reload();
			}
			else if (y % 1 !== 0) { // make sure input is not a decimal value
				alert('Please enter an integer!');
				location.reload();
			}
			else if ((y < 0) || (y > 100)) { // make sure input is not outside of specified range
				alert('Please enter a number between 1 and 100 only!');
				location.reload();
			}
			else {
				userGuesses.push(y); // add user's guess to array
				$('p.numbers').text(userGuesses);
				userScore++; // increase their attempts count by 1
				alert(userScore); // display user's tally
			}
		} // end keydown conditions
	}) // end keydown event
} // end validateNumber function

function testNumber(y) {
		if (x === y) {
			alert('You won!');
			winner = true;
			newGame();
			}
		else if (Math.abs(x-y) <= 5) {
				alert('Super Hot!');
			}
		else if (Math.abs(x-y) >= 10) {
				alert('Hot!');
			}
		else if (Math.abs(x-y) >= 25) {
				alert('Warm!');
			}
		else if (Math.abs(x-y) >= 40) {
				alert('Tepid!');
			}
		else if (Math.abs(x-y) >= 60) {
				alert('Cool!');
			}
		else if (Math.abs(x-y) >= 85) {
				alert('Cold!');
			}
		else (Math.abs(x-y) >= 99) {
				alert('Frozen Arctic');
			}
}; // end testNumber function

}); // end document ready