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
	validateNumber();

			function validateNumber() {
				$('.userinput').keydown(function(event) { 
					if (event.which == 13) { // if user presses Enter key
						// capture user input:
						var y = $(this).val();
						// validate user input:
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

								function compareNumber(y) {
									if (x === y) {
										alert('You won!');
										winner = true;	
										}
									else if (Math.abs(x-y) <= 5) {
											alert('Super Hot!');
											winner = false;
										}
									else if (Math.abs(x-y) <= 10) {
											alert('Hot!');
											winner = false;
										}
									else if (Math.abs(x-y) <= 25) {
											alert('Warm!');
											winner = false;
										}
									else if (Math.abs(x-y) <= 40) {
											alert('Tepid!');
											winner = false;
										}
									else if (Math.abs(x-y) <= 60) {
											alert('Cool!');
											winner = false;
										}
									else if (Math.abs(x-y) <= 85) {
											alert('Cold!');
											winner = false;
										}
									else if (Math.abs(x-y) <= 99) {
											alert('Frozen Arctic');
											winner = false;
										}
								} // end compareNumber function
							} // end else

					} // end keydown conditions
				}) // end keydown event
			} // end validateNumber function

} // end newGame function

}); // end document ready
