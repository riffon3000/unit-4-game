// initialize variables to count wins, losses, and player score
var wins = 0;
var losses = 0;
var score = 0;

// function to generate and return random numbers with range between 19 and 120
var randomNumber = random(19, 120);
var randomPoint = random(1, 12);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber);
console.log(randomPoint);

// if player score is equal to randomPoint add +1 to wins
if (score === randomNumber) {
    ++wins;
}

// if player score is more than randomPoint add +1 to losses
if (score >= randomNumber) {
    ++losses;
}

// return variables to referenced location in html
$("#random-number").text(randomNumber);
console.log(wins);
$("#number-wins").text("Wins: "+ wins);
console.log(losses);
$("#number-losses").text("Losses: " + losses);
console.log(score);
$("#your-score").text(score);