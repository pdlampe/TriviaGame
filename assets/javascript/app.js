$(document).ready(function () {

    $('#countdown').hide();
    $('.trivques').hide();
    $('.results').hide();

    var wrongAns = 0;
    var noAnswer = 0;
    var numsec = 90;
    var intervalSet;
    var correctAns = 0;


    function displayQuest() {
        $('#countdown').show();
        $('.trivques').show();
        $('#gamefin').show();
    }

    function countdownClock() {
        intervalSet = setInterval(decrement, 1000);
    }

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

    function stop() {
        clearInterval(intervalSet);
    }

    function hide() {
        $('#countdown').hide();
        $('.trivques').hide();
        $('#gamefin').hide();
    }

    function displaySummary() {
        $('.results').show();
        noAnswer = (8 - (correctAns + wrongAns));
        $('#correctScore').text("Correct Answers:" + " " + correctAns);
        $('#wrongScore').text("Wrong Answers:" + " " + wrongAns);
        $('#noAnswer').text("Unanswered:" + " " + noAnswer);
    }

    $('#gamestrt').on('click', function () {
        $('#gamestrt').hide();
        displayQuest();
        countdownClock();
    });

    $('#gamefin').on('click', function () {
        $('#gamestrt').hide();
        hide();
        displaySummary();
    });

    $('input[type=radio]').on('change', function () {
        correctAns = $('input[value=correct]:checked').length;
        wrongAns = $('input[value=wrong]:checked').length;
        noAnswer = (8 - (correctAns + wrongAns));
    });
});