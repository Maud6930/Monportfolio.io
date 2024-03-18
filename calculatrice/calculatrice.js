let operation = '';
let currentValue = '';

function appendToDisplay(value) {
    var display = document.getElementById('calculator-display');
    if (!isNaN(value) || value === '.') {
        currentValue += value;
    } else {
        operation += currentValue + ' ' + value + ' ';
        currentValue = '';
    }
    display.value = currentValue;
}

function calculate() {
    operation += currentValue;
    const result = eval(operation);
    document.getElementById('calculator-display').value = result;
    operation = '';
    currentValue = result.toString();
}

document.getElementById('addButton').addEventListener('click', function() {
    appendToDisplay('+');
});

document.getElementById('slowButton').addEventListener('click', function() {
    appendToDisplay('-');
});

document.getElementById('divButton').addEventListener('click', function() {
    appendToDisplay('/');
});

document.getElementById('multButton').addEventListener('click', function() {
    appendToDisplay('*');
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('calculator-display').value = ''; 
    operation = '';
    currentValue = '';
});