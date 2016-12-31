var numbSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("rgb");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();
function init() {
	setUpButtons();
	setUpSquares();
	reset();
}
function setUpButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy") {
				numbSquares = 3;
			} else {
				numbSquares = 6;
			}
			reset();
		});
	}
}
function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColor(pickedColor);
				resetButton.textContent = "Play AGain?";
				h1.style.background = clickedColor;

			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
function reset() {
	colors = generateColorArray(numbSquares);
	pickedColor = generateColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}
resetButton.addEventListener("click", function() {
	reset();
});
function changeColor(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}
function generateColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateColorArray(number) {
	var array = [];
	for(var i = 0; i < number; i++) {
		array.push(randomColor());
	}
	return array;
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
