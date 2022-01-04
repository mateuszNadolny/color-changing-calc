const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalsButton = document.querySelector('[data-equals]');
const currentOperand = document.querySelector('.display-result');

let previousOperand = '';
let mathSign;

function numberHandler() {
    if (currentOperand.innerText === previousOperand) {
        currentOperand.innerText = '';
    };
    if (currentOperand.innerText.length > 9) return;
    if (currentOperand.innerText.length === 8 &&
        this.textContent === '.') return;
    if (this.textContent === '.' &&
        currentOperand.innerText.includes('.')) return;
    if ((this.textContent === '.' &&
            currentOperand.innerText.includes('0')) ||
        (this.textContent === '.' &&
            previousOperand !== '' &&
            currentOperand.innerText === '0')) return currentOperand.innerText = '0.';


    if (currentOperand.innerText === '0') {
        currentOperand.innerText = this.textContent;
    } else {
        currentOperand.innerText += this.textContent;
    }
};

function operationHandler() {
    if (this.textContent === '-' && currentOperand.innerText.length === 1 && currentOperand.innerText === '0') {
        currentOperand.innerText = '-';
        return;
    } else if (currentOperand.innerText.length === 1 && currentOperand.innerText === '0') return;

    if (mathSign !== '') {
        compute();
    }

    mathSign = this.textContent;
    previousOperand = currentOperand.innerText;
};

function resetCalculator() {
    currentOperand.innerText = '0'
    previousOperand = '';
    mathSign = '';
};

function deleteEnteredElement() {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
    if (currentOperand.innerText.length === 0) {
        currentOperand.innerText = '0';
    }
};

function compute() {
    let a = parseFloat(currentOperand.innerText);
    let b = parseFloat(previousOperand);
    let result = 0;

    switch (mathSign) {
        case '+':
            result = (a + b);
            break;
        case '-':
            result = (b - a);
            break;
        case '*':
            result = (a * b);
            break;
        case '/':
            result = (b / a);
            break;
        default:
            result = currentOperand.innerText;
            break;
    }

    previousOperand = currentOperand.innerText;
    currentOperand.innerText = `${result}`;
    mathSign = '';

};

numberButtons.forEach((button) => {
    button.addEventListener('click', numberHandler);
});

operationButtons.forEach((operation) => {
    operation.addEventListener('click', operationHandler);
});

deleteButton.addEventListener('click', deleteEnteredElement);

resetButton.addEventListener('click', resetCalculator);

equalsButton.addEventListener('click', compute);