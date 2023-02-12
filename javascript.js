//Functions for different operations
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    switch (operator){
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
            break;
        default:
            return 'ERROR';
    }
}

//Get the numbers to show up in the display when clicked
let displayValue = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', getNumber));

function getNumber(event){
    displayValue.textContent += event.target.id;
}

//This makes the calculator work
const operations = document.querySelectorAll('.operators');
operations.forEach(operation => operation.addEventListener('click', createOperation));

function createOperation(event){
    let operator = event.target.id;
    let num1 = +(displayValue.textContent);
    displayValue.textContent = '';
    //console.log(operator);
    //console.log(num1);
    const equals = document.getElementById('equals');
    equals.addEventListener('click', getResult);

    function getResult(event){
        let num2 = +(displayValue.textContent);
        //console.log(num2);
        //console.log(operate(operator, num1, num2));
        let solution = (operate(operator, num1, num2));
        displayValue.textContent = solution;
    }
}



