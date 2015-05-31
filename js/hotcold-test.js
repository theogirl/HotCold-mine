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
	
} // end newGame function

function validateNumber() {
	$('.userinput').keydown(function(event) { 
			if (event.which == 13) { // if user presses Enter key
				var y = $(this).val();
				if (y == '') { // make sure input is not empty
								alert('Please enter something!');
								$(this).val(''); // return input field to blank
								$(this).focus();
								}
				else if (y % 1 !== 0) { // make sure input is not a decimal value
								alert('Please enter an integer!');
								$(this).val('');
								$(this).focus();
								}
				else if (isNaN(y)) { // makek sure input is not a string
								alert('Please enter an actual number!');
								$(this).val(''); 
							    $(this).focus();
								}
				else if ((y <= 0) || (y > 100)) { // make sure input is not outside of specified range
								alert('Please enter a number between 1 and 100 only!');
								$(this).val('');
								$(this).focus();
								}
				else {
								return(y);
								$(this).val('');
								$(this).focus();
								} // end else

					} // end keydown conditions
				}) // end keydown event
} // end validateNumber function

function compareNumber(computer, user) {
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


}); // end document ready
