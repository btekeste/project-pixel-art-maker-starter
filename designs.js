// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(evt) {
	const inputHeight = document.querySelector('#inputHeight').value;
	const inputWeight = document.querySelector('#inputWeight').value;
    const canvasGrid = document.querySelector('#pixelCanvas');
	canvasGrid.innerHTML = '';

	for (let i = 1; i <= inputHeight; i++) {
		const newRow = document.createElement('tr');
		canvasGrid.appendChild(newRow);
		for (let j = 1; j <= inputWeight; j++) {
			const newCell = document.createElement('td');
			newRow.appendChild(newCell);
			newCell.onclick = function () {
			colorPicker = document.querySelector('#colorPicker');
			this.style.backgroundColor = colorPicker.value;
			};
		}
	}

	evt.preventDefault();
}
