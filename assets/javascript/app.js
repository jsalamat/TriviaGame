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


// one question at a time and with 30 sec timer
//when click on answer it tell wether correct or not
// it will give correct answer show for 4 sec and mov on to next question
// timer goes down when hit zero show out of time and correct answer
// at the end total of correct, wrong, and unanswered with start over button that reset the game


$(document).ready(function(){


    var time = 10;

    var correctanswer = 0;
    var wronganswer = 0;
    var unanswered = 0;

    var trivia1 = {
        question1: "Name the actor that didn’t play Batman:",
        choices: ["Ben Affleck", "George Clooney", "Christian Bale", "Hugh Jackman"],
        correct: "Hugh Jackman"
    };

    var trivia2 = {
        question1: "What was Harley Quinn’s Former Profession?",
        choices: ["Clown", "Psychiatrist", "Jester", "Assistant"],
        correct: "Psychiatrist"
    };

    var trivia3 = {
        question1: "Who became the Oracle?",
        choices: ["Batwoman", "Catwoman", "Batgirl", "The Huntress"],
        correct: "Batgirl"
    };

    var trivia4 = {
        question1: "Who wasn’t a romantic interest for Batman?",
        choices: ["Zatanna", "Catwoman", "Batgirl", "Wonder Woman"],
        correct: "Zatanna"
    };



    var images = ["../images/wolverine.gif", "assets/images/harley.gif", "assets/images/batgirl.gif", "assets/images/zatanna.gif"]

    var showImage;

    var watch;


    

    	 function reset(){
            time = 10;
		    $("#display").html('<h3>' + time + ' seconds</h3>');

    	}

         function starttime(){
         	watch = setInterval(count, 1000)
            time = 10;   
        };

        function startover(){
         	watch = setInterval(count, 1000)
            time = 10;
            correctanswer = 0;
            wronganswer = 0;
            unanswered = 0;   
        };

        $('#start').on("click", quest1);

        function stop() {
        	clearInterval(watch);
        }

        function count(){
        	time--;
        	$('#display').html('<h3>' + time + ' seconds</h3>');
        	if (time === 0) {
        		stop();
        		reset();
        		displayscore();
        	}
        }

        function timeout (){

        }

        function displayscore(){
        	$('#playerscore').html('Correct Answer: ' + correctanswer + 
                        		   '<br>Wrong Answer: ' + wronganswer +
                                   '<br>Unanswer: ' + unanswered);
        }

        function answer1timeout(){
        	unanswered++;
        	displayscore();
        	stop();
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/wolverine.gif" alt="wolverine">');
        	$('#result').html('<h4> Times Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest2, 1000 * 5);
        }

        function answer1right(){
        	displayscore();
        	stop();
        	clearInterval(answer1);
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/wolverine.gif" alt="wolverine">');
        	$('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest2, 1000 * 5);
        }
        function answer1wrong(){
        	displayscore();
        	stop();
        	clearInterval(answer1);
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/wolverine.gif" alt="wolverine">');
        	$('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest2, 1000 * 5);
        }

        var answer1; 
 
        function quest1(){

            $("#start").hide();
            $('#display').html('<h3>10 seconds</h3>');
            starttime();

        	 answer1 = setTimeout(answer1timeout, 1000 * 10);

            $('#questions').html(trivia1.question1);

            var quest1adiv = $('<div>').addClass("quest1choice1");
                $('#choices1').html(quest1adiv);
            var quest1bdiv = $('<div>').addClass("quest1choice2");
                $('#choices2').html(quest1bdiv);
            var quest1cdiv = $('<div>').addClass("quest1choice3");
                $('#choices3').html(quest1cdiv);
            var quest1ddiv = $('<div>').addClass("quest1choice4");
                $('#choices4').html(quest1ddiv);

                $('.quest1choice1').html(trivia1.choices[0]).on("click", function(a){
                        wronganswer++;
                        answer1wrong();
                });
                $('.quest1choice2').html(trivia1.choices[1]).on("click", function(a){
                        wronganswer++;
                        answer1wrong();
                });
                $('.quest1choice3').html(trivia1.choices[2]).on("click", function(a){
                        wronganswer++;
                        answer1wrong();
                });
                $('.quest1choice4').html(trivia1.choices[3]).on("click", function(a){
                        correctanswer++;
                        answer1right();
                });

        };

        function answer2timeout(){
        	unanswered++;
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/harley.gif" alt="Harley Quinn">');
        	$('#result').html('<h4> Times Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest3, 1000 * 5);
        }

        function answer2right(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer2);
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/harley.gif" alt="Harley Quinn">');
        	$('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest3, 1000 * 5);
        }
        function answer2wrong(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer2);
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/harley.gif" alt="Harley Quinn">');
        	$('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest3, 1000 * 5);
        }

        var answer2; 
 		//have create variable outside to stop interaction between the time out

        function quest2(){

        	$('#result').hide();
        	$('#playerscore').hide();
        	$('#display').html('<h3>10 seconds</h3>');
        	starttime();

        	answer2 = setTimeout(answer2timeout, 1000 * 10);

            $('#questions').html(trivia2.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest2adiv = $('<div>').addClass("quest2choice1");
                $('#choices1').html(quest2adiv);
            var quest2bdiv = $('<div>').addClass("quest2choice2");
                $('#choices2').html(quest2bdiv);
            var quest2cdiv = $('<div>').addClass("quest2choice3");
                $('#choices3').html(quest2cdiv);
            var quest2ddiv = $('<div>').addClass("quest2choice4");
                $('#choices4').html(quest2ddiv);

                $('.quest2choice1').html(trivia2.choices[0]).on("click", function(b){
                        wronganswer++;
                        answer2wrong();
                });
                $('.quest2choice2').html(trivia2.choices[1]).on("click", function(b){
                        correctanswer++;
                        answer2right();
                });
                $('.quest2choice3').html(trivia2.choices[2]).on("click", function(b){
                        wronganswer++;
                        answer2wrong();
                });
                $('.quest2choice4').html(trivia2.choices[3]).on("click", function(b){
                        wronganswer++;
                        answer2wrong();
                });

        };

        function answer3timeout(){
        	unanswered++;
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/batgirl.gif" alt="Batgirl">');
        	$('#result').html('<h4> Times Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            // setTimeout(quest4, 1000 * 5);
        }

        function answer3right(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer3);
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/batgirl.gif" alt="Batgirl">');
        	$('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            // setTimeout(quest4, 1000 * 5);
        }
        function answer3wrong(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer3);
        	$("#display").html('<h3>' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/batgirl.gif" alt="Batgirl">');
        	$('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            // setTimeout(quest4, 1000 * 5);
        }

        var answer3; 
 


        function quest3(){

        	$('#result').hide();
        	$('#playerscore').hide();
        	$('#display').html('<h3>10 seconds</h3>');
        	starttime();

        	answer3 = setTimeout(answer3timeout, 1000 * 10);

            $('#questions').html(trivia3.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest3adiv = $('<div>').addClass("quest3choice1");
                $('#choices1').html(quest3adiv);
            var quest3bdiv = $('<div>').addClass("quest3choice2");
                $('#choices2').html(quest3bdiv);
            var quest3cdiv = $('<div>').addClass("quest3choice3");
                $('#choices3').html(quest3cdiv);
            var quest3ddiv = $('<div>').addClass("quest3choice4");
                $('#choices4').html(quest3ddiv);

                $('.quest3choice1').html(trivia3.choices[0]).on("click", function(b){
                        wronganswer++;
                        answer3wrong();
                });
                $('.quest3choice2').html(trivia3.choices[1]).on("click", function(b){
                        wronganswer++;
                        answer3wrong();
                });
                $('.quest3choice3').html(trivia3.choices[2]).on("click", function(b){
                        correctanswer++;
                        answer3right();
                });
                $('.quest3choice4').html(trivia3.choices[3]).on("click", function(b){
                        wronganswer++;
                        answer3wrong();
                });

        };

        // quest3();

        function quest4(){

        	$('#result').hide();
        	$('#playerscore').hide();
        	$('#display').html('<h3>10 seconds</h3>');
        	starttime();

            $('#questions').html(trivia4.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest4adiv = $('<div>').addClass("quest4choice1");
                $('#choices1').html(quest4adiv);
            var quest4bdiv = $('<div>').addClass("quest4choice2");
                $('#choices2').html(quest4bdiv);
            var quest4cdiv = $('<div>').addClass("quest4choice3");
                $('#choices3').html(quest4cdiv);
            var quest4ddiv = $('<div>').addClass("quest4choice4");
                $('#choices4').html(quest4ddiv);

                $('.quest4choice1').html(trivia4.choices[0]).on("click", function(c){
                        correctanswer++;
                        displayscore();
                        restart();
                });
                $('.quest4choice2').html(trivia4.choices[1]).on("click", function(c){
                        wronganswer++;
                        displayscore();
                        restart();
                });
                $('.quest4choice3').html(trivia4.choices[2]).on("click", function(c){
                        wronganswer++;
                        displayscore();
                        restart();
                });
                $('.quest4choice4').html(trivia4.choices[3]).on("click", function(c){
                        wronganswer++;
                        displayscore();
                        restart();
                });

        };

        function restart(){
            $('#questions').html('<h4>All done, heres how you did</h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            displayscore();
            $("#start").show();
            $('#start').html('<h4>Restart</h4').on('click',function(){
                startover();
                $("#start").hide();
                $('#choices1,#choices2,#choices3,#choices4').show();
            })


        }

        // quest3();  

});