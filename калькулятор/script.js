let currentInput = 'num1';

function addDigit(digit) {
    const input = document.getElementById(currentInput);
    input.value += digit;
}

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = 'Результат';
    document.getElementById('result').style.backgroundColor = '#eee';
    currentInput = 'num1';
}

document.getElementById('num1').addEventListener('focus', () => currentInput = 'num1');
document.getElementById('num2').addEventListener('focus', () => currentInput = 'num2');

document.getElementById('calculate').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    const resultField = document.getElementById('result');
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        resultField.textContent = 'Ошибка: введите оба числа';
        resultField.style.backgroundColor = 'orange';
        return;
    }

    switch (op) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/':
            if (n2 === 0) {
                resultField.textContent = 'Ошибка: деление на 0';
                resultField.style.backgroundColor = 'orange';
                return;
            }
            result = n1 / n2;
            break;
    }

    if (result > 15) {
        resultField.textContent = 'число > 15';
        resultField.style.backgroundColor = 'red';
    } else {
        resultField.textContent = 'Результат: ' + result;
        resultField.style.backgroundColor = '#eee';
    }
});
