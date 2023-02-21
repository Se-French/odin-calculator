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
    let answer = a/ b;

    if (b === 0){
        return 'ERROR';
    } else if ( a % b === 0){
        return answer;
    } else {
        return parseFloat(answer.toFixed(7));
    }
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

//Get the display value
let displayValue = document.getElementById('display');
displayValue.textContent = 0;

//Get the numbers
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', getNumbers));
let num1 = '';
let num2 = '';
let startVal;

function getNumbers(event){

    if (operator == undefined){
        num1 += event.target.value;
        displayValue.textContent = num1;
            if (num1.indexOf('.') != -1){
                document.getElementById('decimal').disabled = true;
            }
        //console.log('num1 = ' + num1);
    } else if (operator != undefined || num2 == ''){
        num2 += event.target.value;
        displayValue.textContent = num2;
        //console.log('num2 = ' + num2);
        startVal = operate(operator, +num1, +num2);
            if (num2.indexOf('.') != -1){
                document.getElementById('decimal').disabled = true;
            }
        //console.log('startVal = ' + startVal);
    } 
}

//Get the operator
const operations = document.querySelectorAll('.operators');
operations.forEach(operation => operation.addEventListener('click', getOperator));
let operator;
let operationCount = 0;

function getOperator(event){
    operator = event.target.id;
    document.getElementById('decimal').disabled = false;
    //to string more than one operation together
    operationCount++;

    if (operationCount > 1){
        num1 = startVal;
        num2 = '';
        displayValue.textContent = num1;
        //console.log('new num1 = ' + num1);
    }
}

//Get the result
const equals = document.getElementById('equals');
equals.addEventListener('click', getResult);

function getResult(){

    if(num1 == '' && num2 == ''){
        displayValue.textContent = '0';
    } else if (num1 != '' && num2 == ''){
        displayValue.textContent = num1;
    } else if (num1 != '' && num2 != ''){
        let result = operate(operator, +num1, +num2);
        //console.log(result);
        displayValue.textContent = result;
    }
}

//Clear all the values to start over
const clear = document.getElementById('clear');
clear.addEventListener('click', clearCalc);

function clearCalc(){
    num1 = '';
    num2 = '';
    operator = undefined;
    startVal = undefined;
    displayValue.textContent = 0;
    operationCount = 0;
    document.getElementById('decimal').disabled = false;
}

//Backspace button
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', undo);

function undo(){
    if (num1 != '' && num2 == ''){
        num1 = num1.slice(0, -1);
        displayValue.textContent = num1;
    } else if (num2 != ''){
        num2 = num2.slice(0, -1);
        displayValue.textContent = num2;
    }
}






