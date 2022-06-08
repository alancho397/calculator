const screen = document.querySelector('.screen');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const inverseButton = document.querySelector('.inverse');
const decimalButton = document.querySelector('.decimal');
const percentageButton = document.querySelector('.percentage');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');

let firstValue = 0;
let secondValue = 0;
let operatorValue = '';

function updateNumbers(event){
    if(screen.innerHTML[0] === '0'){
        screen.innerHTML = event.target.innerHTML;
    } else if  (screen.innerHTML[0] === '+' || 
                screen.innerHTML[0] === '-' || 
                screen.innerHTML[0] === '*' || 
                screen.innerHTML[0] === '/'){
        screen.innerHTML = '';  
        screen.innerHTML = event.target.innerHTML;
    } else{
        screen.innerHTML = screen.innerHTML + event.target.innerHTML;
    }
}


function updateOperators(event){
    if (operatorValue === '+' || 
        operatorValue === '-' || 
        operatorValue === '*' || 
        operatorValue === '/'){
        equal();
    } else if(!screen.innerHTML.includes('%')){
        firstValue = screen.innerHTML;
    }
    screen.innerHTML = '';
    screen.innerHTML = event.target.innerHTML;
    operatorValue = event.target.innerHTML;
}

function clear(){
    screen.innerHTML = 0;
    firstValue = 0;
    secondValue = 0;
    operatorValue = '';
}

function equal(){
    if(!screen.innerHTML.includes('%')){
        secondValue = screen.innerHTML;
    } else if(operatorValue === '+'){
        screen.innerHTML = (parseFloat(firstValue) + parseFloat(secondValue)).toFixed(3);
    } else if(operatorValue === '-'){
        screen.innerHTML = (parseFloat(firstValue) - parseFloat(secondValue)).toFixed(3);
    } else if(operatorValue === '*'){
        screen.innerHTML = (parseFloat(firstValue) * parseFloat(secondValue)).toFixed(3);
    } else if(operatorValue === '/'){
        screen.innerHTML = (parseFloat(firstValue) / parseFloat(secondValue)).toFixed(3);
    }
    operatorValue = ''
    firstValue = screen.innerHTML;
    secondValue = 0;
}

function inverse(){
    if(Math.sign(parseFloat(screen.innerHTML)) === 1){
        screen.innerHTML = '-' + screen.innerHTML;
    } else {
        screen.innerHTML = screen.innerHTML.substring(1);
    }
}

function decimal(){
    if(screen.innerHTML.includes('.')){
        return;
    } else{
        screen.innerHTML = screen.innerHTML + '.';
    }
}

function percentage(){
    if(screen.innerHTML.includes('%')){
        return;
    } else{
        if (operatorValue === '+' || 
            operatorValue === '-' || 
            operatorValue === '*' || 
            operatorValue === '/'){
            secondValue = parseFloat(screen.innerHTML) / 100;
        } else{
            firstValue = parseFloat(screen.innerHTML) / 100;
        }
    screen.innerHTML = screen.innerHTML + '%';
    }
}

clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', equal);
inverseButton.addEventListener('click', inverse);
decimalButton.addEventListener('click', decimal);
percentageButton.addEventListener('click', percentage);
operatorButtons.forEach(button => button.addEventListener('click', updateOperators));
numberButtons.forEach(button => button.addEventListener('click', updateNumbers));
