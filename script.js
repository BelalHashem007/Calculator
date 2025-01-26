let operator;
let n1;
let n2;

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}


function operate(n1,operator,n2) {
    switch(operator) {
        case "+":
            return add(n1,n2);
            break;

        case "-":
            return subtract(n1,n2);
            break;

        case "*":
            return multiply(n1,n2);
            break;

        case "/":
            return divide(n1,n2);
            break;
        
        default:
            return "Error";
    }
}