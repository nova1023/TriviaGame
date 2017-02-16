var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 60;
var timerInterval;

window.onload = function() {
	$("#submitButton").hide();
	$("#main-content").hide();
	$("#score-container").hide();
};

$("#start-game").on("click", function() {
	$("#main-content").show();
	$("#submitButton").show();
	$("#start-game").hide();
	timerInterval = setInterval(countDown, 1000);
	countDown();
});

function countDown(){
	timer--;
	$("#timer-integer").html(timer);
	if (timer === 0) {
		stopTimer();
		$("#main-content").hide();
		$("#submitButton").hide();
		$("#score-container").show();
		$("#timeUpOrDone").html("Time is up!");
		notAnswered();
	}
}

function stopTimer(){
	clearInterval(timerInterval);
}

//When you click on Submit, checks if each question was answered

$("#submitButton").on("click", function() {
	$("#submitButton").hide();
	$("#main-content").hide();
	$("#score-container").show();
	$("#timeUpOrDone").html("You beat the timer!");
	stopTimer();

	var answerOne = $('#answer1').prop('checked');

	if (answerOne === true) {
		correct++;
		$("#correct-integer").html(correct);
	}
	else {
		incorrect++;
		$("#incorrect-integer").html(incorrect);
		}

	// question 2
	var answerTwo = $('#answer2').prop('checked');

	if (answerTwo === true) {
		correct++;
		$("#correct-integer").html(correct);
	}
	else {
		incorrect++;
		$("#incorrect-integer").html(incorrect);
		}

	// question 3
	var answerThree = $('#answer3').prop('checked');

	if (answerThree === true) {
		correct++;
		$("#correct-integer").html(correct);
	}
	else {
		incorrect++;
		$("#incorrect-integer").html(incorrect);
		}

	//question 4
	var answerFour = $('#answer4').prop('checked');

	if (answerFour === true) {
		correct++;
		$("#correct-integer").html(correct);
	}
	else {
		incorrect++;
		$("#incorrect-integer").html(incorrect);
		}

	//question 5
	var answerFive = $('#answer5').prop('checked');

	if (answerFive === true) {
		correct++;
		$("#correct-integer").html(correct);
	}
	else {
		incorrect++;
		$("#incorrect-integer").html(incorrect);
		}

});	

// if there were no selections made for each question the count for unanswered goes up
function notAnswered() {
	//if nothing selected for question 1
	var nothingQ1 = $(".class1").prop('checked');
	if (nothingQ1 === false) {
		unanswered++;
		$("#unanswered-integer").html(unanswered);
	}

	//if nothing selected for question 2
	var nothingQ2 = $(".class2").prop('checked');
	if (nothingQ2 === false) {
		unanswered++;
		$("#unanswered-integer").html(unanswered);
	}

	//if nothing selected for question 3
	var nothingQ3 = $(".class3").prop('checked');
	if (nothingQ3 === false) {
		unanswered++;
		$("#unanswered-integer").html(unanswered);
	}

	//if nothing selected for question 4
	var nothingQ4 = $(".class4").prop('checked');
	if (nothingQ4 === false) {
		unanswered++;
		$("#unanswered-integer").html(unanswered);
	}

	//if nothing selected for question 5
	var nothingQ5 = $(".class5").prop('checked');
	if (nothingQ5 === false) {
		unanswered++;
		$("#unanswered-integer").html(unanswered);
	}
}