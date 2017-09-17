//buttons
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");

var winner = document.querySelector("#winner");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var p1Score = 0;
var p2Score = 0;

var winningScore = 5;
var playingTo = document.querySelector("#playingTo");

var input = document.querySelector("input");

var gameOver = false;

p1.addEventListener("click", function(){
	if(!gameOver){
		p1Score += 1;
		p1Display.textContent = p1Score;
		
		if(p1Score === winningScore){
			winner.textContent = "Winner is Player 1";
			p1Display.style.color = "green";
			gameOver = true;
		}

		p1Display.textContent = p1Score;
	}
});

p2.addEventListener("click", function(){
	
	if(!gameOver){
		p2Score += 1;
		p2Display.textContent = p2Score;
		
		if(p2Score === winningScore){
			winner.textContent = "Winner is Player 2";
			p2Display.style.color = "green";
			gameOver = true;
		}

		p2Display.textContent = p2Score;
	}

});

reset.addEventListener("click", function(){
	resetInput();
});


function resetInput(){
	p1Score = 0;
	p2Score = 0;

	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;

	gameOver = false;

	p1Display.style.color = "black";
	p2Display.style.color = "black";

	winner.textContent = "";
}


input.addEventListener("change", function(){
	winningScore = Number(input.value);
	playingTo.textContent = winningScore;
	resetInput();
});