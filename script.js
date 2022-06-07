const screen = document.querySelector('.screen');
const clearButton = document.querySelector('.clear');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');

let firstValue = 0;
let secondValue = 0;

function updateNumbers(event){
    if(screen.innerHTML[0] === 0){
        console.log('hi');
        //screen.innerHTML = event.target.innerHTML;
    }
    screen.innerHTML = screen.innerHTML + event.target.innerHTML;
    //how do you know if input is first or second value?
}

function updateOperators(event){
    firstValue = screen.innerHTML;
    clear();
    screen.innerHTML = event.target.innerHTML;
}

function clear(){
    screen.innerHTML = 0;
}

function equal(){
}

clearButton.addEventListener('click', clear);
operatorButtons.forEach(button => button.addEventListener('click', updateOperators));
numberButtons.forEach(button => button.addEventListener('click', updateNumbers));
