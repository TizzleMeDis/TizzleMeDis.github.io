window.addEventListener('load', function () {
  init();
});

const equation = [];
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {

	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.currentOperandTextElement.innerHTML = '';
		this.previousOperandTextElement.innerHTML = '';

		this.currentOperandTextElement = '';
		this.previousOperandTextElement = '';
		this.operation = undefined;
	}

	appendNumber(number) {

		if(this.currentOperandTextElement.innerHTML == null) {
			this.currentOperandTextElement.innerHTML = number;
		} else {
			this.currentOperandTextElement.innerHTML += number;
		}
		this.currentOperandTextElement += number;
	}

	chooseOperation(operation) {
		this.previousOperandTextElement.innerHTML = this.currentOperandTextElement.innerHTML + " " + operation + " ";
		this.currentOperandTextElement.innerHTML = '';

	}

	compute(equation) {

		this.previousOperandTextElement.innerHTML += " " + this.currentOperandTextElement.innerHTML + " ";
		this.currentOperandTextElement.innerHTML = answer(this.previousOperandTextElement.innerText + " ");

	}

	updateDisplay() {
		this.currentOperandTextElement.innerHTML = this.currentOperandTextElement.innerHTML;
	}
}

const equation = [];

function answer(equation) {
	console.log("Equation: " + equation);

	var operand1, operand2, operation, answer;

	const mathEquation = [];

	mathEquation.push(equation.substring(0, equation.indexOf(" ")));
	equation = equation.slice(equation.indexOf(" ") + 1, equation.length);
	mathEquation.push(equation.substring(0, equation.indexOf(" ")));
	equation = equation.slice(equation.indexOf(" ") + 1, equation.length);
	mathEquation.push(equation.substring(0, equation.indexOf(" ")));

	console.log(mathEquation.toString());

	operand1 = parseInt(mathEquation[0]);
	operation = mathEquation[1];
	operand2 = parseInt(mathEquation[2]);

	if(operation == "+") {
		answer = operand1 + operand2;
	} else if (operation == "-") {
		answer = operand1 - operand2;
	} else if (operation == "*") {
		answer = operand1 * operand2;
	} else if (operation == "/") {
		answer = operand1 / operand2;
	}

	mathEquation.splice(0, mathEquation.length);
	console.log("answer: " + answer)

	return "" + answer;
}

function getEquation(press) {
	equation.push();
}

function calculated(flag, calculator) {
	if (flag) {
		calculator.clear();
	}
}

function init() {

	var flag = false;
	const numberButtons = document.querySelectorAll('button[data-number]');
	const operationButtons = document.querySelectorAll('[data-operation]');
	const equalsButton = document.querySelector('[data-equals]');
	const clearButton = document.querySelector('[data-clear]');
	const previousOperandTextElement = document.querySelector('[data-previous-operand]');
	const currentOperandTextElement = document.querySelector('[data-current-operand]');

	const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

	numberButtons.forEach(button => {
		button.addEventListener('click', () => {
			console.log("clicked number");
			
			calculated(flag, calculator);
			flag = false;
			calculator.appendNumber(button.innerText);
			calculator.updateDisplay();
		})
	});

	operationButtons.forEach(button => {
		button.addEventListener('click', () => {
			console.log("clicked operation");

			calculated(flag, calculator);
			flag = false;
			calculator.chooseOperation(button.innerText);
			calculator.updateDisplay();
		})
	});
	
	clearButton.addEventListener('click', () => {
		console.log("clear");
		calculator.clear();
	});

	equalsButton.addEventListener('click', () => {
		flag  = true;
		console.log("compute");
		calculator.compute(flag);
	});

	const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

	numberButtons.forEach(button => {
		button.addEventListener('click', () => {
			console.log("clicked number: ");
			calculator.appendNumber(button.innerText)
			calculator.updateDisplay();
		});
	});

	operationButtons.forEach(button => {
		button.addEventListener('click', () => {
			console.log("clicked operation: ");
			
		})
	});

	function getEquation(press) {
		equation.push();
	}