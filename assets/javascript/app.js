var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 30;
var timerInterval;
var playerClick;


// window.onload = function() {
// 	$("#main-content").hide();
// 	$("#score-container").hide();
// };


// $("#start-game").click(function() {
// 	$("#main-content").show();
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
// 		$("#score-container").show();
// 		$("#timeUpOrDone").html("Time is up!");
// 	}
// }




// do I need this since the div will be hidden anyway?
function stopTimer(){
	clearInterval(timerInterval);
}




// Starting here is where I'm running into a problem

var answerOne = $('#a1').prop('checked');

function questionOne() {
	if (answerOne = true) {
		correct++;
		$("#correct-integer").html(correct);
	}
	else {
		incorrect++;
		$("#incorrect-integer").html(correct);
	}
}
questionOne();



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

