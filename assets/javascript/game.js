var yourScore = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;



function startGame() {
// Choose a random number between 19 and 120
	targetScore = randomNumberValue(19,120);

// Assign a random value between 1 and 12 to each of the four crystals
	crystal1 = randomNumberValue(1,12);
	crystal2 = randomNumberValue(1,12);
	crystal3 = randomNumberValue(1,12);
	crystal4 = randomNumberValue(1,12);

// Your score should equal zero
	yourScore = 0;

// Replace the div in the html with the value of the variables: yourScore, targetScore, wins, & losses
$("#your-score").html(yourScore);
$("#target-score").html(targetScore);
$("#wins-counter").html(wins);
$("#loss-counter").html(losses);
}


// create function to compare target score with your score and determine if it matches or if your score exceeds the target score
// if the scores match, alert "You Win!", add to the wins counter, and start the game over
// if the user's score exceeds the target score, alert "You Lose!", add to the loss counter, and start the game over
function checkScore() {
	if (yourScore === targetScore) {
		alert("You Win!");
		$("#wins-counter").html(++wins);
		startGame();
	}
	else if (yourScore > targetScore) {
		alert("You Lose!");
		$("#loss-counter").html(++losses);
		startGame();
	}

}


// create a function that chooses a random number between a specified range
function randomNumberValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}



// create on-click functions for each button that adds the value of the selected button to the target score
// then replace the target score with the new value
// then check whether the user's score has matched or exceeded the target score to determine whether the user won or lost
$("#button1").click(function() {
yourScore = yourScore + crystal1;
$("#your-score").html(yourScore);
checkScore();
});

$("#button2").click(function() {
yourScore = yourScore + crystal2;
$("#your-score").html(yourScore);
checkScore();
});

$("#button3").click(function() {
yourScore = yourScore + crystal3;
$("#your-score").html(yourScore);
checkScore();
});

$("#button4").click(function() {
yourScore = yourScore + crystal4;
$("#your-score").html(yourScore);
checkScore();
});





startGame();
