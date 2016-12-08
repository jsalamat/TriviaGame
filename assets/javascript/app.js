// Create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML.

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option.
// After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer.
// Wait a few seconds, then show the next question.

// If the player chooses the wrong answer, tell the player they selected the wrong option
// and then display the correct answer. Wait a few seconds, then show the next question.

// On the final screen, show the number of correct answers, incorrect answers,
// and an option to restart the game (without reloading the page).

var timer = 30;
var correctanswer = 0;
var wronganswer = 0;
var unanswered = 0;

var questions = [
	["What is questionA?", "option A1", "option A2", "optionA3", "option A4"],
	["What is questionB?", "optionB1", "optionB2", "optionB3", "optionB4"],
	["What is questionC?", "optionC1", "optionC2", "optionC3", "optionC4"],
];

var images = ["images/sample1.png", "images/sample2.png"]

var showImage;

	function quest1(){
		$('#questions').html(questions[0][0]);

		for (i = 1; i < questions[0].length; i++)
			$('#choices').append('<div>' + questions[0][i] +'</div>');
			$('#choices').on("click", function(k){
				if ( k === "option A4"){
					console.log('Winner')
				}else{
					console.log('Loser')
				}
			})

	};

	quest1();


// one question at a time and with 30 sec timer
//when click on answer it tell wether correct or not
// it will give correct answer show for 4 sec and mov on to next question
// timer goes down when hit zero show out of time and correct answer
// at the end total of correct, wrong, and unanswered with start over button that reset the game
