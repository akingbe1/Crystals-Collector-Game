var yourScore = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var targetTotal = 0;
var wins = 0;
var losses = 0;





function startGame() {
// Choose a random number between 19 and 120
	targetTotal = randomNumberValue(19,120);
// Assign a random value between 1 and 12 to each of the four crystals
	crystal1 = randomNumberValue(1,12);
	crystal2 = randomNumberValue(1,12);
	crystal3 = randomNumberValue(1,12);
	crystal4 = randomNumberValue(1,12);

// Your score should equal zero
	yourScore = 0;

$("#your-score").html(yourScore);
$("#target-score").html(targetTotal);
$("#wins-counter").html(wins);
$("#loss-counter").html(losses);
}

function checkScore() {
	if (yourScore === targetTotal) {
		alert("You WIn!");
		$("#wins-counter").html(++wins);
		startGame();
	}
	else if (yourScore > targetTotal) {
		alert("You Lose!");
		$("#loss-counter").html(++losses);
		startGame();
	}

}

function randomNumberValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

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
