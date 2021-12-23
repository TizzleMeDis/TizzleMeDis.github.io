class Calculator {

	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement
		this.currentOperandTextElement = currentOperandTextElement
		this.clear()
	}

	clear() {
		this.currentOperand = ''
		this.previousOperand = ''
		this.operation = undefined
	}

	delete() {

	}

	appendNumber(number) {
		this.currentOperand = number
	}

	chooseOperation(operation) {

	}

	compute() {

	}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.currentOperand

	}
}
const equation = [];

function getEquation(press) {
	equation.push();
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelector('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		console.log("clicked");
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay();
	})
})