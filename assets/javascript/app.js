$(document).ready(function() {

var question1 = {
    "question": "Who are the two heroes that are going to fight Bowser?",
  	"answer1": "Toad and Peach", 
    "answer2": "Spaghetti and Fetuccine", 
    "answer3": "Mario and Luigi"
  };
var question2 = {
  	"question": "Which person is an opposing boxer in Mike Tyson's punchout?",
  	"answer1": "Soda Popinksi", 
    "answer2": "Rocky",
    "answer3": "Donkey Kong"
  };
var question3 = {
  	"question": "Who is the main character you control in The Legend of Zelda?",
  	"answer1": "Ganon", 
    "answer2": "Zelda",
    "answer3": "Link"
  };
var question4 = {
  	"question": "What is the cheat code on the controller for 30 lives in Contra?",
  	"answer1": "UP, UP, LEFT, RIGHT, LEFT, RIGHT, DOWN, DOWN, B, A, START", 
    "answer2": "UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A, START",
    "answer3": "DOWN, DOWN, RIGHT, RIGHT, LEFT, LEFT, UP, UP, A, B, START" 
  };
var question5 = {
  	"question": "What was the best-selling game for the NES that was NOT packaged with most systems?",
  	"answer1": "Super Mario Bros. 3", 
    "answer2": "Tetris", 
    "answer3": "Zelda"
  }; 

var totalTime = 30
var countdown = totalTime + 1;
var timeBarWidth;
var score = 0;
var totalQuestions = 5;
var currentQuestion = 0;
var interval;
var message = "You'll have " + totalTime + " seconds to answer " + totalQuestions + " questions." 

var questionArray = [question1, question2, question3, question4, question5];

$("#next").hide();
$("message").html(message);
$("answer-choices").hide();

  function setTimeBar() {
        var timeBarWidth = (100 - ((countdown / totalTime) * 100)) + "%";
        $(".timer-bar-full").css("width", timeBarWidth);
        if (countdown === 0) {
            $(".timer-bar-full").addClass("timer-bar-full-100");
            gameOver();
        } else if (countdown < 5) {
            countdown = countdown - 1;
            $("#timer-counter").html(" " + countdown + " seconds");
            $(".timer-bar-full").addClass("timer-danger");
        } else if (countdown >= 5) {
            countdown = countdown - 1;
            $("#timer-counter").html(countdown + " seconds");
        }
        console.log("countdown = " + countdown + ", timeBarWidth = " + timeBarWidth);
    }

    setTimeBar();

    function setTime() {
        interval = setInterval(setTimeBar, 1000);
    }

  

  function buildPage(obj) {
       $("h2").html(obj.question);
       $("#answer-choice-1").attr({ "value": obj.answer1 })
       $("#answer-choice-1-label").attr({ "for": obj.answer1 }).html(obj.answer1);
       $("#answer-choice-2").attr({ "value": obj.answer2 });
       $("#answer-choice-2-label").attr({ "for": obj.answer2 }).html(obj.answer2);
       $("#answer-choice-3").attr({ "value": obj.answer3 });
       $("#answer-choice-3-label").attr({ "for": obj.answer3 }).html(obj.answer3);
    }
  
    var myAnswer;

    function keepScore() {
        console.log("currentQuestion = " + currentQuestion + ", myAnswer = " + myAnswer);
        if (currentQuestion === 0 && myAnswer === "answer-choice-3") {
            score++;
            return;
        } else if (currentQuestion === 1 && myAnswer === "answer-choice-1") {
            score++;
            return;
        } else if (currentQuestion === 2 && myAnswer === "answer-choice-3") {
            score++;
            return;
        } else if (currentQuestion === 3 && myAnswer === "answer-choice-2") {
            score++;
            return;
        } else if (currentQuestion === 4 && myAnswer === "answer-choice-1") {
            score++;
            return;
        } else {
            return;
        }
    }

    function gameOver() {
      keepScore();
        $("#next").hide();
        $("#answer-choices").hide();
        $("h2").html("Game Over");
        $("#message").show().html("You scored " + score + " out of " + totalQuestions);
        clearInterval(interval);
    }
    $("#start").click(function() {
        $("#start").hide();
        $("#message").hide();
        $("#next").show();
        $("#answer-choices").show();
        setTime();
        buildPage(questionArray[0]);
    });

    $("#next").click(function() {
    
        myAnswer = $("input[name=answer]:checked").attr("id");
        console.log("score = " + score + ", myAnswer = " + myAnswer);

        if (currentQuestion < 4) {
            $('.answer').prop('checked', false);
            keepScore();
            currentQuestion++;
            buildPage(questionArray[currentQuestion]);
        } else {
            gameOver();
        }
    });
});
