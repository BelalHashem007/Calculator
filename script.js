let operator ='';
let n1;
let n2;
let isOperatorEmpty = true;
let isSign = false;
let signTwice = false;

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
    if (b != 0 )
        return a/b;
    else
        return "You can`t divide by zero."
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
const btnPoint = document.querySelector('.point');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const btnMultiply = document.querySelector('.multi-sign');
const btnDivision = document.querySelector('.division');
const btnEqual = document.querySelector('.equal');
const btnClear = document.querySelector('.clear');
const calcText = document.querySelector('.calc-text');



btnClear.addEventListener('click', () => {
    calcText.value = "";
    isOperatorEmpty = true;
    isSign = false;
});
btn0.addEventListener('click', () =>{
    if (isOperatorEmpty ) {calcText.value += "0"; signTwice=false;}
    else {calcText.value ='0'; isOperatorEmpty= true; signTwice=false;}; 
});
btn1.addEventListener('click', () => {
    if (isOperatorEmpty ) {calcText.value += "1"; signTwice=false;}
    else {calcText.value ='1'; isOperatorEmpty= true; signTwice=false;}; 
});
btn2.addEventListener('click', () => {{
    if (isOperatorEmpty ) {calcText.value += "2"; signTwice=false;}
    else {calcText.value ='2'; isOperatorEmpty= true; signTwice=false;}; 
}});
btn3.addEventListener('click', () => {
    if (isOperatorEmpty ) {calcText.value += "3"; signTwice=false;}
    else {calcText.value ='3'; isOperatorEmpty= true; signTwice=false;};
});
btn4.addEventListener('click', () => {
    if (isOperatorEmpty ) {calcText.value += "4"; signTwice=false;}
    else {calcText.value ='4'; isOperatorEmpty= true; signTwice=false;};
});
btn5.addEventListener('click', () => {
    if (isOperatorEmpty ) {calcText.value += "5"; signTwice=false;}
    else {calcText.value ='5'; isOperatorEmpty= true; signTwice=false;};
});
btn6.addEventListener('click', () => {
    if (isOperatorEmpty ) {calcText.value += "6"; signTwice=false;}
    else {calcText.value ='6'; isOperatorEmpty= true; signTwice=false;};
});
btn7.addEventListener('click', () => {
    if (isOperatorEmpty ) {calcText.value += "7"; signTwice=false;}
    else {calcText.value ='7'; isOperatorEmpty= true;} signTwice=false;;
});
btn8.addEventListener('click', () => {
    if (isOperatorEmpty ) {calcText.value += "8"; signTwice=false;}
    else {calcText.value ='8'; isOperatorEmpty= true; signTwice=false;} ;
});
btn9.addEventListener('click', () => {
    if (isOperatorEmpty ) {calcText.value += "9"; signTwice=false;}
    else {calcText.value ='9'; isOperatorEmpty= true; signTwice=false;};
});
btnPoint.addEventListener('click', () => {
    if (!calcText.value.includes('.'))
    {
    if (isOperatorEmpty) {calcText.value += "."; signTwice=false;}
    else {calcText.value ='0.'; isOperatorEmpty= true; signTwice=false;}; 
    }
});
btnPlus.addEventListener('click', () => {
    if (!isSign || signTwice){
        n1 = calcText.value; 
        operator = '+'; 
        isOperatorEmpty= false;
        isSign=true;
        signTwice=true;
    } else {
        n2 = calcText.value;
        calcText.value = operate(Number(n1),operator,Number(n2));
        n1 = calcText.value;
        operator= '+';
        isOperatorEmpty= false;
        signTwice=true;
    }
});
btnMinus.addEventListener('click', () => {
    if (!isSign || signTwice){
    n1 = calcText.value; operator = '-'; 
    isOperatorEmpty= false; 
    isSign=true;
    signTwice = true;
} else {
    n2 = calcText.value;
    calcText.value = operate(Number(n1),operator,Number(n2));
    n1 = calcText.value;
    operator= '-';
    isOperatorEmpty= false;
    signTwice=true;
    }
});
btnMultiply.addEventListener('click', () => {
    if (!isSign || signTwice){
    n1 = calcText.value; 
    operator = '*'; 
    isOperatorEmpty= false; 
    isSign=true;
    signTwice=true;
} else {
    n2 = calcText.value;
    calcText.value = operate(Number(n1),operator,Number(n2));
    n1 = calcText.value;
    operator= '*';
    isOperatorEmpty= false;
    signTwice=true;
    }
});
btnDivision.addEventListener('click', () => {
    if (!isSign || signTwice){
    n1 = calcText.value;
     operator = '/'; 
     isOperatorEmpty= false; 
     isSign=true;
     signTwice=true;
} else {
    n2 = calcText.value;
    calcText.value = operate(Number(n1),operator,Number(n2));
    n1 = calcText.value;
    operator= '/';
    isOperatorEmpty= false;
    signTwice=true;
    }
}); 

btnEqual.addEventListener('click', () =>{
    if (!operator=='')
    {
    n2 = calcText.value;
    calcText.value = operate(Number(n1),operator,Number(n2));
    isSign = false;
    isOperatorEmpty= false;
    }
})





