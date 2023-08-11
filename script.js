const canvasElement = document.getElementById("myCanvas");
const canvasContext = canvasElement.getContext("2d");

clearCanvas();

let divergenteCheckbox = document.getElementById("divergente");
let convergenteCheckbox = document.getElementById("convergente");
let gerarLenteButton = document.getElementById("submit");
let anguloRange = document.getElementById("angulo");

gerarLenteButton.addEventListener("click", () => {
	let angulo = anguloRange.value;
	if (convergenteCheckbox.checked == true && divergenteCheckbox.checked == true) {
		clearCanvas();
		canvasContext.beginPath();
		canvasContext.moveTo(0, 0);
		canvasContext.lineTo(500, 500);
		canvasContext.stroke();
	}
	else if (divergenteCheckbox.checked == true) {

		clearCanvas();
		canvasContext.beginPath();
		canvasContext.moveTo(0, 0);
		canvasContext.lineTo(250, 125);
		canvasContext.lineTo(500, 0);
		canvasContext.stroke();
	}

	else if (convergenteCheckbox.checked == true) {
		clearCanvas();
		canvasContext.beginPath();
		canvasContext.moveTo(0, 275);
		canvasContext.lineTo(250, 0);
		canvasContext.lineTo(500, 275);
		canvasContext.stroke();
	}

	console.log("Angulo: " + anguloRange.value);

})

function drawLines() {
	// Desenhar linha horizontal
	canvasContext.beginPath();
	canvasContext.moveTo(0, 250);
	canvasContext.lineTo(500, 250);
	canvasContext.stroke();

	// Desenhar linha vertical
	canvasContext.beginPath();
	canvasContext.moveTo(250, 0);
	canvasContext.lineTo(250, 500);
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
