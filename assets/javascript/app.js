$(document).ready(function() {

var question1 = {
    "question": "Who are the two heroes that are going to fight Bowser?",
  	"answer1": "Toad and Peach", 
    "answer2": "Spaghetti and Fetuccine", 
    "answer3": "Wario and Koopa", 
    "answer4": "Mario and Luigi"
  };
var question2 = {
  	"question": "Which person is an opposing boxer in Mike Tyson's punchout?",
  	"answer1": "Soda Popinksi", 
    "answer2": "Rocky",
    "answer3": "Donkey Kong", 
    "answer4": "Bowser"
  };
var question3 = {
  	"question": "Who is the main character you control in The Legend of Zelda?",
  	"answer1": "Ganon", 
    "answer2": "Zelda",
    "answer3": "Link", 
    "answer4": "Mario"
  };
var question4 = {
  	"question": "What is the cheat code on the controller for 30 lives in Contra?",
  	"answer1": "UP, UP, LEFT, RIGHT, LEFT, RIGHT, DOWN, DOWN, B, A, START", 
    "answer2": "UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A, START",
    "answer3": "DOWN, DOWN, RIGHT, RIGHT, LEFT, LEFT, UP, UP, A, B, START", 
    "answer4": "DOWN, UP, DOWN, UP, LEFT, LEFT, RIGHT, RIGHT, B, A, START"
  };
var question5 = {
  	"question": "What was the best-selling game for the NES that was NOT packaged with most systems?",
  	"answer1": "Super Mario Bros. 3", 
    "answer2": "Tetris", 
    "answer3": "Metroid",
    "answer4": "Zelda"
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

var timer = function() {
  $("#timer").each(function() {
    var count = parseInt($(this).html());
    if (count !==0) {
      $(this).html(count - 1);
    }
  });
};

setInterval(timer, 1000);
});

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
        if (currentQuestion === 0 && myAnswer === "answer-choice-4") {
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
