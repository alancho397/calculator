const screen = document.querySelector('.screen');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
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
    //how do you know if input is first or second value?
}


function updateOperators(event){
    if (operatorValue === '+' || 
        operatorValue === '-' || 
        operatorValue === '*' || 
        operatorValue === '/'){
        equal();
    }
    firstValue = screen.innerHTML;
    clear();
    screen.innerHTML = event.target.innerHTML;
    operatorValue = event.target.innerHTML;
}

function clear(){
    screen.innerHTML = 0;
}

function equal(){
    secondValue = screen.innerHTML;
    if(operatorValue === '+'){
        screen.innerHTML = parseInt(firstValue) + parseInt(secondValue);
    } else if(operatorValue === '-'){
        screen.innerHTML = parseInt(firstValue) - parseInt(secondValue);
    } else if(operatorValue === '*'){
        screen.innerHTML = parseInt(firstValue) * parseInt(secondValue);
    } else if(operatorValue === '/'){
        screen.innerHTML = parseInt(firstValue) / parseInt(secondValue);
    }
}


clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', equal);
operatorButtons.forEach(button => button.addEventListener('click', updateOperators));
numberButtons.forEach(button => button.addEventListener('click', updateNumbers));
