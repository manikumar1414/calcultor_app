// Get DOM elements
const display = document.getElementById('display');
const result = document.getElementById('result');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

// Add click event listeners to numeric and operator buttons
for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function() {
		display.innerHTML += numbers[i].value;
	});
}

for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', function() {
		display.innerHTML += operators[i].value;
	});
}

// Add click event listener to equals button
equalsBtn.addEventListener('click', function() {
	try {
		result.value = eval(display.innerHTML);
	} catch (error) {
		result.value = 'Error';
	}
});

// Add click event listener to clear button
clearBtn.addEventListener('click', function() {
	display.innerHTML = '';
	result.value = '';
});

// Add mouseover and mouseout event listeners to buttons
const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('mouseover', function() {
		buttons[i].style.backgroundColor = '#EFEFEF';
		buttons[i].style.color = '#000000';
	});
	
	buttons[i].addEventListener('mouseout', function() {
		buttons[i].style.backgroundColor = '#FFFFFF';
		if (buttons[i].classList.contains('number')) {
			buttons[i].style.color = '#555555';
		} else if (buttons[i].classList.contains('operator')) {
			buttons[i].style.color = '#FFA500';
		} else if (buttons[i].id === 'clear') {
			buttons[i].style.backgroundColor = '#FFA500';
			buttons[i].style.color = '#FFFFFF';
		} else if (buttons[i].id === 'equals') {
			buttons[i].style.backgroundColor = '#3CB371';
			buttons[i].style.color = '#FFFFFF';
		}
	});
}
