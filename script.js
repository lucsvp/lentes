const canvasElement = document.getElementById("myCanvas");
const canvasContext = canvasElement.getContext("2d");

clearCanvas();

let divergenteCheckbox = document.getElementById("divergente");
let convergenteCheckbox = document.getElementById("convergente");
let gerarLenteButton = document.getElementById("submit");
let focoRange = document.getElementById("foco");

gerarLenteButton.addEventListener("click", () => {
	let foco = focoRange.value;
	if (convergenteCheckbox.checked == true && divergenteCheckbox.checked == true) {
		clearCanvas();
		canvasContext.beginPath();
		canvasContext.moveTo(0, 0);
		canvasContext.lineTo(canvasElement.width, canvasElement.height);
		canvasContext.stroke();
	}
	else if (divergenteCheckbox.checked == true) {

		clearCanvas();
		canvasContext.beginPath();
		canvasContext.moveTo(0, canvasElement.height/4);
		canvasContext.lineTo(canvasElement.width/2, 125);
		canvasContext.lineTo(canvasElement.width, -25);
		canvasContext.stroke();

		canvasContext.beginPath();
		canvasContext.moveTo(0, canvasElement.height*0.75);
		canvasContext.lineTo(canvasElement.width/2, canvasElement.height*0.75);
		canvasContext.lineTo(canvasElement.width, 525);
		canvasContext.stroke();
	}

	else if (convergenteCheckbox.checked == true) {

		clearCanvas();
		canvasContext.beginPath();
		canvasContext.moveTo(0, canvasElement.height/4);
		canvasContext.lineTo(canvasElement.width/2, canvasElement.height/4);
		canvasContext.lineTo(canvasElement.width, canvasElement.width*0.35);
		canvasContext.stroke();

		canvasContext.beginPath();
		canvasContext.moveTo(0, canvasElement.height*0.75);
		canvasContext.lineTo(canvasElement.width/2, canvasElement.height*0.75);
		canvasContext.lineTo(canvasElement.width, canvasElement.width*0.275);
		canvasContext.stroke();

	}

	console.log("Foco: " + focoRange.value);

})

function drawLines() {
	// Desenhar linha horizontal
	canvasContext.beginPath();
	canvasContext.moveTo(0, canvasElement.height/2);
	canvasContext.lineTo(canvasElement.width, canvasElement.height/2);
	canvasContext.stroke();

	// Desenhar linha vertical
	canvasContext.beginPath();
	canvasContext.moveTo(canvasElement.width/2, 0);
	canvasContext.lineTo(canvasElement.width/2, 500);
	canvasContext.stroke();
}

function clearCanvas() {
	/*
	canvasContext.clearRect(0, 0, 248, 248);
	canvasContext.clearRect(252, 0, 498, 248);
	canvasContext.clearRect(0, 252, 248, 498);
	canvasContext.clearRect(252, 252, 498, 498);
	*/

	canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
	drawLines();
}
