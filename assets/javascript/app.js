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
//need to

$(document).ready(function(){
    $('#choices1,#choices2,#choices3,#choices4').hide();
    $('#playerscore').hide();
    var time = 10;

    var correctanswer = 0;
    var wronganswer = 0;
    var unanswered = 0;

    var trivia1 = {
        question1: "Name the actor that didn&#39;t play Batman:",
        choices: ["Ben Affleck", "George Clooney", "Christian Bale", "Hugh Jackman"],
        correct: "Hugh Jackman"
    };

    var trivia2 = {
        question1: "What was Harley Quinn&#39;s Former Profession?",
        choices: ["Clown", "Psychiatrist", "Jester", "Assistant"],
        correct: "Psychiatrist"
    };

    var trivia3 = {
        question1: "Who became the Oracle?",
        choices: ["Batwoman", "Catwoman", "Batgirl", "The Huntress"],
        correct: "Batgirl"
    };

    var trivia4 = {
        question1: "Who wasn&#39;t a romantic interest for Batman?",
        choices: ["Zatanna", "Catwoman", "Batgirl", "Wonder Woman"],
        correct: "Zatanna"
    };

    var trivia5 = {
        question1: "Batman made an appearance in this 2014 movie?",
        choices: ["X-men&#58; Days of Future Past", "Captain America&#58; the Winter Soldier", "The Amazing Spiderman 2", "The Lego Movie"],
        correct: "The Lego Movie"
    };

    var trivia6 = {
        question1: "In the parody song of Jingle Bells that reference Batman, what do they say about Batman?",
        choices: ["He is Swell", "He Smells", "He Fell", "He is Well"],
        correct: "He Smells"
    };

    var trivia7 = {
        question1: "Which Villain broke Batman&#39;s back?",
        choices: ["Joker", "Killer Croc", "Bane", "The Penguin"],
        correct: "Bane"
    };

    var trivia8 = {
        question1: "What superhero name does Dick Grayson take after his stint as Robin?",
        choices: ["Nightwatch", "Nightcrawler", "Robin 2.0", "Nightwing"],
        correct: "Nightwing"
    };

    var trivia9 = {
        question1: "What is Batman&#39;s signature dance?",
        choices: ["Batusi", "Batcarena", "The Bat Dab", "Bat waltz"],
        correct: "Batusi"
    };

    var trivia10 = {
        question1: "What is the first name of Batman&#39;s Mom?",
        choices: ["Lois", "Martha", "Selina", "Georgia"],
        correct: "Martha"
    };

    var trivia11 = {
        question1: "What is Mr. Freeze&#39;s weapon of choice?",
        choices: ["Freeze Sword", "Freeze Laser", "Freeze Gun", "Freeze Ray"],
        correct: "Freeze Gun"
    };

    var trivia12 = {
        question1: "What color is the suit that Joker usually wears?",
        choices: ["Purple", "Blue", "Pink", "Red"],
        correct: "Purple"
    };



    var images = ["../images/wolverine.gif", "../images/harley.gif", "../images/batgirl.gif", "../images/zatanna.gif"]

    var showImage;

    var watch;


    	 function reset(){
            time = 10;
		    $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');

    	}

         function starttime(){
         	watch = setInterval(count, 1000)
            time = 10;   
        };

        function startover(){
         	// watch = setInterval(count, 1000)
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
        	$('#display').html('<h3>Time Remaining: ' + time + ' seconds</h3>');
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
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	$("#display").html('<h3>Time Remaining: 0 seconds</h3>');
        	$('#questions').html('<img src="assets/images/wolverine.gif" alt="wolverine">');
        	$('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest2, 1000 * 5);
        }

        function answer1right(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer1);
        	$("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/wolverine.gif" alt="wolverine">');
        	$('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest2, 1000 * 5);
        }
        function answer1wrong(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer1);
        	$("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/wolverine.gif" alt="wolverine">');
        	$('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest2, 1000 * 5);
        }

        var answer1; 
 
        function quest1(){
            $('#questions').show();
            $('#result').hide();

            $('#display').show();
            $("#start").hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

        	 answer1 = setTimeout(answer1timeout, 1000 * 10);

            $('#questions').html(trivia1.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();
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
        	$("#display").html('<h3>Time Remaining: 0 seconds</h3>');
        	$('#questions').html('<img src="assets/images/harley.gif" alt="Harley Quinn">');
        	$('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest3, 1000 * 5);
        }

        function answer2right(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer2);
        	$("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
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
        	$("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/harley.gif" alt="Harley Quinn">');
        	$('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest3, 1000 * 5);
        }

        var answer2; 

        function quest2(){

        	$('#result').hide();
        	$('#playerscore').hide();
        	$('#display').html('<h3>Time Remaining: 10 seconds</h3>');
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
        	$("#display").html('<h3>Time Remaining: 0 seconds</h3>');
        	$('#questions').html('<img src="assets/images/batgirl.gif" alt="Batgirl">');
        	$('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest4, 1000 * 5);
        }

        function answer3right(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer3);
        	$("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/batgirl.gif" alt="Batgirl">');
        	$('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest4, 1000 * 5);
        }
        function answer3wrong(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer3);
        	$("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/batgirl.gif" alt="Batgirl">');
        	$('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest4, 1000 * 5);
        }

        var answer3; 
 
        function quest3(){

        	$('#result').hide();
        	$('#playerscore').hide();
        	$('#display').html('<h3>Time Remaining: 10 seconds</h3>');
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

        function answer4timeout(){
            unanswered++;
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            $("#display").html('<h3>Time Remaining: 0 seconds</h3>');
            $('#questions').html('<img src="assets/images/zatanna.gif" alt="Zatanna">');
            $('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest5, 1000 * 5);
        }

        function answer4right(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer4);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/zatanna.gif" alt="Zatanna">');
            $('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest5, 1000 * 5);
        }
        function answer4wrong(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer4);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/zatanna.gif" alt="Zatanna">');
            $('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest5, 1000 * 5);
        }

        var answer4; 

        function quest4(){

            $('#result').hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

            answer4 = setTimeout(answer4timeout, 1000 * 10);

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

                $('.quest4choice1').html(trivia4.choices[0]).on("click", function(b){
                        correctanswer++;
                        answer4right();
                });
                $('.quest4choice2').html(trivia4.choices[1]).on("click", function(b){
                        wronganswer++;
                        answer4wrong();
                });
                $('.quest4choice3').html(trivia4.choices[2]).on("click", function(b){
                        wronganswer++;
                        answer4wrong();
                });
                $('.quest4choice4').html(trivia4.choices[3]).on("click", function(b){
                        wronganswer++;
                        answer4wrong();
                });

        };

        function answer5timeout(){
            unanswered++;
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            $("#display").html('<h3>Time Remaining: 0 seconds</h3>');
            $('#questions').html('<img src="assets/images/legobatman.gif" alt="Lego Batman">');
            $('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest6, 1000 * 5);
        }

        function answer5right(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer5);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/legobatman.gif" alt="Lego Batman">');
            $('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest6, 1000 * 5);
        }
        function answer5wrong(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer5);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/legobatman.gif" alt="Lego Batman">');
            $('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest6, 1000 * 5);
        }

        var answer5; 

        function quest5(){

            $('#result').hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

            answer5 = setTimeout(answer5timeout, 1000 * 10);

            $('#questions').html(trivia5.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest5adiv = $('<div>').addClass("quest5choice1");
                $('#choices1').html(quest5adiv);
            var quest5bdiv = $('<div>').addClass("quest5choice2");
                $('#choices2').html(quest5bdiv);
            var quest5cdiv = $('<div>').addClass("quest5choice3");
                $('#choices3').html(quest5cdiv);
            var quest5ddiv = $('<div>').addClass("quest5choice4");
                $('#choices4').html(quest5ddiv);

                $('.quest5choice1').html(trivia5.choices[0]).on("click", function(b){
                        wronganswer++;
                        answer5wrong();
                });
                $('.quest5choice2').html(trivia5.choices[1]).on("click", function(b){
                        wronganswer++;
                        answer5wrong();
                });
                $('.quest5choice3').html(trivia5.choices[2]).on("click", function(b){
                        wronganswer++;
                        answer5wrong();
                });
                $('.quest5choice4').html(trivia5.choices[3]).on("click", function(b){
                        correctanswer++;
                        answer5right();
                });

        };

         function answer6timeout(){
            unanswered++;
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            $("#display").html('<h3>Time Remaining: 0 seconds</h3>');
            $('#questions').html('<img src="assets/images/batmansmells.gif" alt="Joker Laughing">');
            $('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest7, 1000 * 5);
        }

        function answer6right(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer6);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/batmansmells.gif" alt="Joker Laughing">');
            $('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest7, 1000 * 5);
        }
        function answer6wrong(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer6);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/batmansmells.gif" alt="Joker Laughing">');
            $('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest7, 1000 * 5);
        }

        var answer6; 

        function quest6(){

            $('#result').hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

            answer6 = setTimeout(answer6timeout, 1000 * 10);

            $('#questions').html(trivia6.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest6adiv = $('<div>').addClass("quest6choice1");
                $('#choices1').html(quest6adiv);
            var quest6bdiv = $('<div>').addClass("quest6choice2");
                $('#choices2').html(quest6bdiv);
            var quest6cdiv = $('<div>').addClass("quest6choice3");
                $('#choices3').html(quest6cdiv);
            var quest6ddiv = $('<div>').addClass("quest6choice4");
                $('#choices4').html(quest6ddiv);

                $('.quest6choice1').html(trivia6.choices[0]).on("click", function(b){
                        wronganswer++;
                        answer6wrong();
                });
                $('.quest6choice2').html(trivia6.choices[1]).on("click", function(b){
                        correctanswer++;
                        answer6right();
                });
                $('.quest6choice3').html(trivia6.choices[2]).on("click", function(b){
                        wronganswer++;
                        answer6wrong();
                });
                $('.quest6choice4').html(trivia6.choices[3]).on("click", function(b){
                        wronganswer++;
                        answer6wrong();
                });

        };

         function answer7timeout(){
            unanswered++;
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            $("#display").html('<h3>Time Remaining: 0 seconds</h3>');
            $('#questions').html('<img src="assets/images/bane.gif" alt="Bane">');
            $('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest8, 1000 * 5);
        }

        function answer7right(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer7);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/bane.gif" alt="Bane">');
            $('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest8, 1000 * 5);
        }
        function answer7wrong(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer7);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/bane.gif" alt="Bane">');
            $('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest8, 1000 * 5);
        }

        var answer7; 

        function quest7(){

            $('#result').hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

            answer7 = setTimeout(answer7timeout, 1000 * 10);

            $('#questions').html(trivia7.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest7adiv = $('<div>').addClass("quest7choice1");
                $('#choices1').html(quest7adiv);
            var quest7bdiv = $('<div>').addClass("quest7choice2");
                $('#choices2').html(quest7bdiv);
            var quest7cdiv = $('<div>').addClass("quest7choice3");
                $('#choices3').html(quest7cdiv);
            var quest7ddiv = $('<div>').addClass("quest7choice4");
                $('#choices4').html(quest7ddiv);

                $('.quest7choice1').html(trivia7.choices[0]).on("click", function(b){
                        wronganswer++;
                        answer7wrong();
                });
                $('.quest7choice2').html(trivia7.choices[1]).on("click", function(b){
                        wronganswer++;
                        answer7wrong();
                });
                $('.quest7choice3').html(trivia7.choices[2]).on("click", function(b){
                        correctanswer++;
                        answer7right();
                });
                $('.quest7choice4').html(trivia7.choices[3]).on("click", function(b){
                        wronganswer++;
                        answer7wrong();
                });

        };

        function answer8timeout(){
            unanswered++;
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            $("#display").html('<h3>Time Remaining: 0 seconds</h3>');
            $('#questions').html('<img src="assets/images/nightwing.gif" alt="Nightwing">');
            $('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest9, 1000 * 5);
        }

        function answer8right(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer8);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/nightwing.gif" alt="Nightwing">');
            $('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest9, 1000 * 5);
        }
        function answer8wrong(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer8);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/nightwing.gif" alt="Nightwing">');
            $('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest9, 1000 * 5);
        }

        var answer8; 

        function quest8(){

            $('#result').hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

            answer8 = setTimeout(answer8timeout, 1000 * 10);

            $('#questions').html(trivia8.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest8adiv = $('<div>').addClass("quest8choice1");
                $('#choices1').html(quest8adiv);
            var quest8bdiv = $('<div>').addClass("quest8choice2");
                $('#choices2').html(quest8bdiv);
            var quest8cdiv = $('<div>').addClass("quest8choice3");
                $('#choices3').html(quest8cdiv);
            var quest8ddiv = $('<div>').addClass("quest8choice4");
                $('#choices4').html(quest8ddiv);

                $('.quest8choice1').html(trivia8.choices[0]).on("click", function(b){
                        wronganswer++;
                        answer8wrong();
                });
                $('.quest8choice2').html(trivia8.choices[1]).on("click", function(b){
                        wronganswer++;
                        answer8wrong();
                });
                $('.quest8choice3').html(trivia8.choices[2]).on("click", function(b){
                        wronganswer++;
                        answer8wrong();
                });
                $('.quest8choice4').html(trivia8.choices[3]).on("click", function(b){
                        correctanswer++;
                        answer8right();
                });

        };

        function answer9timeout(){
            unanswered++;
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            $("#display").html('<h3>Time Remaining: 0 seconds</h3>');
            $('#questions').html('<img src="assets/images/batusi.gif" alt="Batusi">');
            $('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest10, 1000 * 5);
        }

        function answer9right(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer9);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/batusi.gif" alt="Batusi">');
            $('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest10, 1000 * 5);
        }
        function answer9wrong(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer9);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/batusi.gif" alt="Batusi">');
            $('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest10, 1000 * 5);
        }

        var answer9; 

        function quest9(){

            $('#result').hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

            answer9 = setTimeout(answer9timeout, 1000 * 10);

            $('#questions').html(trivia9.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest9adiv = $('<div>').addClass("quest9choice1");
                $('#choices1').html(quest9adiv);
            var quest9bdiv = $('<div>').addClass("quest9choice2");
                $('#choices2').html(quest9bdiv);
            var quest9cdiv = $('<div>').addClass("quest9choice3");
                $('#choices3').html(quest9cdiv);
            var quest9ddiv = $('<div>').addClass("quest9choice4");
                $('#choices4').html(quest9ddiv);

                $('.quest9choice1').html(trivia9.choices[0]).on("click", function(b){
                        correctanswer++;
                        answer9right();
                });
                $('.quest9choice2').html(trivia9.choices[1]).on("click", function(b){
                        wronganswer++;
                        answer9wrong();
                });
                $('.quest9choice3').html(trivia9.choices[2]).on("click", function(b){
                        wronganswer++;
                        answer9wrong();
                });
                $('.quest9choice4').html(trivia9.choices[3]).on("click", function(b){
                        wronganswer++;
                        answer9wrong();
                });

        };

        function answer10timeout(){
            unanswered++;
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            $("#display").html('<h3>Time Remaining: 0 seconds</h3>');
            $('#questions').html('<img src="assets/images/martha.gif" alt="Sad Affleck">');
            $('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest11, 1000 * 5);
        }

        function answer10right(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer10);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/martha.gif" alt="Sad Affleck">');
            $('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest11, 1000 * 5);
        }
        function answer10wrong(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer10);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/martha.gif" alt="Sad Affleck">');
            $('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest11, 1000 * 5);
        }

        var answer10; 

        function quest10(){

            $('#result').hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

            answer10 = setTimeout(answer10timeout, 1000 * 10);

            $('#questions').html(trivia10.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest10adiv = $('<div>').addClass("quest10choice1");
                $('#choices1').html(quest10adiv);
            var quest10bdiv = $('<div>').addClass("quest10choice2");
                $('#choices2').html(quest10bdiv);
            var quest10cdiv = $('<div>').addClass("quest10choice3");
                $('#choices3').html(quest10cdiv);
            var quest10ddiv = $('<div>').addClass("quest10choice4");
                $('#choices4').html(quest10ddiv);

                $('.quest10choice1').html(trivia10.choices[0]).on("click", function(b){
                        wronganswer++;
                        answer10wrong();
                });
                $('.quest10choice2').html(trivia10.choices[1]).on("click", function(b){
                        correctanswer++;
                        answer10right();
                });
                $('.quest10choice3').html(trivia10.choices[2]).on("click", function(b){
                        wronganswer++;
                        answer10wrong();
                });
                $('.quest10choice4').html(trivia10.choices[3]).on("click", function(b){
                        wronganswer++;
                        answer10wrong();
                });

        };

        function answer11timeout(){
            unanswered++;
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            $("#display").html('<h3>Time Remaining: 0 seconds</h3>');
            $('#questions').html('<img src="assets/images/mrfreeze.gif" alt="Mr Freeze">');
            $('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest12, 1000 * 5);
        }

        function answer11right(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer11);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/mrfreeze.gif" alt="Mr Freeze">');
            $('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest12, 1000 * 5);
        }
        function answer11wrong(){
            $('#playerscore').show();
            $('#result').show();
            displayscore();
            stop();
            clearInterval(answer11);
            $("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
            $('#questions').html('<img src="assets/images/mrfreeze.gif" alt="Mr Freeze">');
            $('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(quest12, 1000 * 5);
        }

        var answer11; 

        function quest11(){

            $('#result').hide();
            $('#playerscore').hide();
            $('#display').html('<h3>Time Remaining: 10 seconds</h3>');
            starttime();

            answer11 = setTimeout(answer11timeout, 1000 * 10);

            $('#questions').html(trivia11.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest11adiv = $('<div>').addClass("quest11choice1");
                $('#choices1').html(quest11adiv);
            var quest11bdiv = $('<div>').addClass("quest11choice2");
                $('#choices2').html(quest11bdiv);
            var quest11cdiv = $('<div>').addClass("quest11choice3");
                $('#choices3').html(quest11cdiv);
            var quest11ddiv = $('<div>').addClass("quest11choice4");
                $('#choices4').html(quest11ddiv);

                $('.quest11choice1').html(trivia11.choices[0]).on("click", function(b){
                        wronganswer++;
                        answer11wrong();
                });
                $('.quest11choice2').html(trivia11.choices[1]).on("click", function(b){
                        wronganswer++;
                        answer11wrong();
                });
                $('.quest11choice3').html(trivia11.choices[2]).on("click", function(b){
                        correctanswer++;
                        answer11right();
                });
                $('.quest11choice4').html(trivia11.choices[3]).on("click", function(b){
                        wronganswer++;
                        answer11wrong();
                });

        };
  
        function answer12timeout(){
        	unanswered++;
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	$("#display").html('<h3>Time Remaining: 0 seconds</h3>');
        	$('#questions').html('<img src="assets/images/joker.gif" alt="Joker">');
        	$('#result').html('<h4> Time&#39;s Up </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(restart, 1000 * 5);
        }

        function answer12right(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer12);
        	$("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/joker.gif" alt="Joker">');
        	$('#result').html('<h4> Correct </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(restart, 1000 * 5);
        }
        function answer12wrong(){
        	$('#playerscore').show();
        	$('#result').show();
        	displayscore();
        	stop();
        	clearInterval(answer12);
        	$("#display").html('<h3>Time Remaining: ' + time + ' seconds</h3>');
        	$('#questions').html('<img src="assets/images/joker.gif" alt="Joker">');
        	$('#result').html('<h4> Wrong! </h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            setTimeout(restart, 1000 * 5);
        }



        var answer12; 

        function quest12(){

        	$('#result').hide();
        	$('#playerscore').hide();
        	$('#display').html('<h3>Time Remaining: 10 seconds</h3>');
        	starttime();

        	answer12 = setTimeout(answer12timeout, 1000 * 10);

            $('#questions').html(trivia12.question1);
            $('#choices1,#choices2,#choices3,#choices4').show();

            var quest12adiv = $('<div>').addClass("quest12choice1");
                $('#choices1').html(quest12adiv);
            var quest12bdiv = $('<div>').addClass("quest12choice2");
                $('#choices2').html(quest12bdiv);
            var quest12cdiv = $('<div>').addClass("quest12choice3");
                $('#choices3').html(quest12cdiv);
            var quest12ddiv = $('<div>').addClass("quest12choice4");
                $('#choices4').html(quest12ddiv);

                $('.quest12choice1').html(trivia12.choices[0]).on("click", function(c){
                        correctanswer++;
                        answer12right();
                });
                $('.quest12choice2').html(trivia12.choices[1]).on("click", function(c){
                        wronganswer++;
                        answer12wrong();
                });
                $('.quest12choice3').html(trivia12.choices[2]).on("click", function(c){
                        wronganswer++;
                        answer12wrong();
                });
                $('.quest12choice4').html(trivia12.choices[3]).on("click", function(c){
                        wronganswer++;
                        answer12wrong();
                });

        };

        function restart(){
        	this.stop();
        	$('#display').hide();
        	$('#questions').hide();
            $('#result').html('<h4>All done, here&#39;s how you did</h4>');
            $('#choices1,#choices2,#choices3,#choices4').hide();
            displayscore();
            $("#start").show();
            $('#start').html('<h4>Restart</h4').on('click',function(){
                startover();
                $("#start").hide();
                $('#choices1,#choices2,#choices3,#choices4').show();
            })

        }

});