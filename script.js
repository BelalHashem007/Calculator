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


const btn0 = document.querySelector('.num0');
const btn1 = document.querySelector('.num1');
const btn2 = document.querySelector('.num2');
const btn3 = document.querySelector('.num3');
const btn4 = document.querySelector('.num4');
const btn5 = document.querySelector('.num5');
const btn6 = document.querySelector('.num6');
const btn7 = document.querySelector('.num7');
const btn8 = document.querySelector('.num8');
const btn9 = document.querySelector('.num9');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const btnMultiply = document.querySelector('.multi-sign');
const btnDivision = document.querySelector('.division');
const btnEqual = document.querySelector('.equal');
const btnClear = document.querySelector('.clear');
const calcText = document.querySelector('.calc-text');


btnClear.addEventListener('click', () => calcText.value = "");
btn0.addEventListener('click', () => calcText.value += "0");
btn1.addEventListener('click', () => calcText.value += "1");
btn2.addEventListener('click', () => calcText.value += "2");
btn3.addEventListener('click', () => calcText.value += "3");
btn4.addEventListener('click', () => calcText.value += "4");
btn5.addEventListener('click', () => calcText.value += "5");
btn6.addEventListener('click', () => calcText.value += "6");
btn7.addEventListener('click', () => calcText.value += "7");
btn8.addEventListener('click', () => calcText.value += "8");
btn9.addEventListener('click', () => calcText.value += "9");
btnPlus.addEventListener('click', () => calcText.value += "+");
btnMinus.addEventListener('click', () => calcText.value += "-");
btnMultiply.addEventListener('click', () => calcText.value += "*");
btnDivision.addEventListener('click', () => calcText.value += "/");

btnEqual.addEventListener('click', () =>{
    let str = calcText.value;
    let index;
    if (str.includes('+'))
        index = str.indexOf('+')
    if (str.includes('-'))
        index = str.indexOf('-')
    if (str.includes('*'))
        index = str.indexOf('*')
    if (str.includes('/'))
        index = str.indexOf('/')
    let n1 = str.substring(0,index);
    let n2 = str.substring(index+1);
    calcText.value = operate(Number(n1),str.at(index),Number(n2));
})





