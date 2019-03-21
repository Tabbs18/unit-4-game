// Variables to store wins, losses, total
var userTotal = 0;
var wins = 0;
var losses = 0;
var random;

random = Math.floor(Math.random() * 100) + 19;
console.log(random);

$(document).ready(function () {

    // Display the random number
    $('#random-number').text(random);

    //Generate random number for each gem
    var num1 = Math.floor(Math.random() * 12) + 1;
    var num2 = Math.floor(Math.random() * 12) + 1;
    var num3 = Math.floor(Math.random() * 12) + 1;
    var num4 = Math.floor(Math.random() * 12) + 1;

    $('#wins').text(wins);

    $('#losses').text(losses);

    // Making the gems clickable
    $('.button1').on('click', function () {

        userTotal = userTotal + num1;

        console.log("New userTotal= " + userTotal);

        $('#totalScore').text(userTotal);

        //if else condition
        if (userTotal == random) {

            winner();

        } else if (userTotal > random) {

            loser();
        }
    })
    $('.button2').on('click', function () {

        userTotal = userTotal + num2;

        $('#totalScore').text(userTotal);

        if (userTotal == random) {

            winner();

        } else if (userTotal > random) {

            loser();
        }
    })
    $('.button3').on('click', function () {

        userTotal = userTotal + num3;

        $('#totalScore').text(userTotal);

        if (userTotal == random) {

            winner();

        } else if (userTotal > random) {

            loser();
        }
    })
    $('.button4').on('click', function () {

        userTotal = userTotal + num4;

        console.log("New userTotal= " + userTotal);

        $('#totalScore').text(userTotal);

        if (userTotal == random) {

            winner();

        } else if (userTotal > random) {

            loser();
        }
    });
    // Reset game
    function reset() {
        random = Math.floor(Math.random() * 100) + 19;
        console.log(random)
        $('#random-number').text(random);
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        num3 = Math.floor(Math.random() * 12) + 1;
        num4 = Math.floor(Math.random() * 12) + 1;
        userTotal = 0;
        $('#totalScore').text(userTotal);
    }
    // Display wins
    function winner() {
        alert("You Won!!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    // Display losses
    function loser() {
        alert("You Lost!!");
        losses++;
        $('#losses').text(losses);
        reset()
    }
});