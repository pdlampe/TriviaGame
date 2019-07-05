$(document).ready(function () {

    $('#countdown').hide();
    $('.trivques').hide();
    $('.results').hide();

    // Declare Variables
    var numsec = 90;
    var intervalSet;
    var correctAns = 0;
    var wrongAns = 0;
    var unanswered = 0;

    //ALL FUNCTIONS

    // function to show questions
    function showQuestions() {
        $('#countdown').show();
        $('.trivques').show();
        $('#game-finish').show();
    }

    // function for timer
    function countdownTimer() {
        intervalSet = setInterval(decrement, 1000);
    }

    // function to decrement timer
    function decrement() {
        numsec--;
        $('#timer').html(" " + numsec + " " + "seconds");
        if (numsec === 1) {
            $('#timer').html(" " + numsec + " " + "second");
        }
        else if (numsec === 0) {
            stop();
            hide();
            displaySummary();
        }
    }

    //function to clear timer
    function stop() {
        clearInterval(intervalSet);
    }

    //function to hide text after questions are answered or timer out
    function hide() {
        $('#countdown').hide();
        $('.trivques').hide();
        $('#game-finish').hide();
    }

    // function to display summary of game
    function displaySummary() {
        $('.results').show();
        unanswered = (8 - (correctAns + wrongAns));
        $('#correctScore').text("Correct Answers:" + " " + correctAns);
        $('#wrongScore').text("Wrong Answers:" + " " + wrongAns);
        $('#unanswered').text("Unanswered:" + " " + unanswered);
    }


    //Clicking Start Button
    $('#game-start').on('click', function () {
        $('#game-start').hide();
        showQuestions();
        countdownTimer();
    });

    //Clicking Done Button
    $('#game-finish').on('click', function () {
        $('#game-start').hide();
        hide();
        displaySummary();
    });

    //Clicking Radio button
    $('input[type=radio]').on('change', function () {
        correctAns = $('input[value=correct]:checked').length;
        wrongAns = $('input[value=wrong]:checked').length;
        unanswered = (8 - (correctAns + wrongAns));
    });

    // Last closing bracket
});