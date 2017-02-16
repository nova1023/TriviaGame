var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 30;
var timerInterval;
var playerClick;


// window.onload = function() {
// 	$("#submitButton").hide();
// 	$("#main-content").hide();
// 	$("#score-container").hide();
// };


// $("#start-game").on("click", function() {
// 	$("#main-content").show();
// 	$("#submitButton").show();
// 	$("#start-game").hide();
// 	timerInterval = setInterval(countDown, 1000);
// 	countDown();
// });


// function countDown(){
// 	timer--;
// 	$("#timer-integer").html(timer);
// 	if (timer === 0) {
// 		stopTimer();
// 		$("#main-content").hide();
// 		$("#submitButton").hide();
// 		$("#score-container").show();
// 		$("#timeUpOrDone").html("Time is up!");
// 	}
// }

// function stopTimer(){
// 	clearInterval(timerInterval);
// }




// Starting here is where I'm running into a problem

// var answerOne = $('#a1').prop('checked');
// var wrongOne = $('.wrongClass1').prop('checked');


 // use .each

$("#submitButton").on("click", function() {
	var answerOne = $('#a1').prop('checked');
	var wrongOne = $('.wrongClass1').prop('checked');

	if (answerOne === true) {
		correct++;
		$("#correct-integer").html(correct);

	}
	else if (wrongOne === true) {
		incorrect++;
		$("#incorrect-integer").html(incorrect);
	}

});


// $("#a1").on("click", function() {
// 		if (answerOne === true) {
// 			correct++;
// 			$("#correct-integer").html(correct);
// 		}
// 		else {
// 			incorrect++;
// 			$("#incorrect-integer").html(incorrect);
// 		}
// 	});




// $("input").check(function() {
// 	if (answerOne = true){
// 		correct++;
// 		$("#correct-integer").html(correct);
// 	}
// 	else {
// 		incorrect++;
// 		$("#incorrect-integer").html(incorrect);
// 	}
// });

