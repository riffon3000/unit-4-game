$(document).ready(function () {
    // initialize variables to count wins, losses, and total score
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // function to generate and return random numbers with range between min and max
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // initialize randomNumber value from random() function between 19 and 120
    var randomNumber = random(19, 120);
    console.log("randomNumber: " + randomNumber);

    // write randomNumber to HTML document
    $("#random-number").text(randomNumber);

    // initialize randomPoint value for gems from random() function between 1 and 12
    var randomPoint = random(1, 12);
    console.log("randomPoint: " + randomPoint);

    console.log("total wins: " + wins);
    // write total wins to HTML document
    $("#total-wins").text("Wins: " + wins);

    console.log("total losses: " + losses);
    // write total losses to HTML document
    $("#total-losses").text("Losses: " + losses);

    // function to reset 
    function reset() {
        randomNumber = random(19, 120);
        $("#random-number").text(randomNumber);
        randomPoint = random(1, 12);
        totalScore = 0;
        $("#total-score").text(totalScore);
    }

    // if player score is less than randomNumber add randomPoint from button click
    switch(totalScore) {
        case (totalScore <= randomNumber):
            $(".gem").on("click", function () {
            totalScore = totalScore + random(1, 12);
            console.log("totalScore: " + totalScore);
            $("#total-score").text(totalScore);
            break;

    // if player score is equal to randomPoint add +1 to wins
        case (totalScore === randomNumber):
            ++wins;
            $("#total-wins").text("Wins: " + wins);
            reset();
            break;

    // case if player score is more than randomPoint add +1 to losses
        case (totalScore >= randomNumber):
            ++losses;
            $("#total-losses").text("Losses: " + losses);
            reset();
            break;
        
        default:
            break;
    }
});