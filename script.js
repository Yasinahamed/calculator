const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}


function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid operation');
    }
}


function clearDisplay() {
    display.value = '';
}


function backspace() {
    display.value = display.value.slice(0, -1);
}
