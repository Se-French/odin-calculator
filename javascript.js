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

/*OPERATE FUNCTION USING AN IF...ELSE

function operate(operator, num1, num2){
    if (operator === '+'){
        return add(num1, num2);
    } else if (operator === '-'){
        return subtract(num1, num2);
    } else if (operator === '*'){
        return multiply(num1, num2);
    } else if (operator === '/'){
        return divide(num1, num2);
    }
}

*/
//OPERATE USING A SWITCH STATEMENT
function operate(operator, num1, num2){
    switch (operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return 'ERROR';
    }
}

let displayValue;
