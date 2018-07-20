function check(){


	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

	if (question1 == "Paris"){
		correct++;
	}
	if (question2 == "Keystone"){
		correct++;
	}
	if (question3 == "Arizona"){
		correct++;
	}

var message = ["Great Job!", "Not Bad", "WOW, You really need to study better..."];
var gifs = ["img/win.gif", "img/notBad.gif", "img/Loss.gif"];
var range;


	if (correct < 1){
		range = 2;
	}
	if (correct > 0 && correct < 3){
		range = 1;
	}
	if (correct > 2){
		range = 0;
	}

	document.getElementById("results").style.visibility = "visible";
	
	document.getElementById("message").innerHTML = message[range];
	document.getElementById("score").innerHTML = "You got " + correct + " Correct.";
	document.getElementById("gifs").src = gifs[range];
}

