$(document).ready (function() {

$('.userinput').focus();
var x = getRandomInt(1, 10); // generate a random integer btwn 1 and 100
$('.userinput').keydown(function(event) { 
				if (event.which == 13) { // if user presses Enter key
				var y = $(this).val(); 	// capture user input
			}
		});
newGame();


// -------FUNCTIONS---------//

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  // end getRandomInt function

function newGame() {
	var userGuesses = [];
	var userScore = 0;
	var winner = false;
	validateNumber;

} // end newGame function

function validateNumber() {

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
						else if ((y <= 0) || (y > 100)) { // make sure input is not outside of specified range
							alert('Please enter a number between 1 and 100 only!');
							$(this).val('');
							$(this).focus();
						}
						else {
							userGuesses.push(y); // add user's guess to array
							$('.userGuesses').text(userGuesses);
							userScore++; //  increase count of users' guesses by one each time
							$('.userScore').text(userScore);
							$(this).val('');
							$(this).focus();
							compareNumber(y);
						} // end else

} // end validateNumber function
								
function compareNumber(y) {
									if (x === y) {
										alert('You won!');
										winner = true;	
										}
									else if (Math.abs(x-y) <= 5) {
											alert('Hot!');
										}
									else {
											alert('cold!');
										}
								
								} // end compareNumber function

});
