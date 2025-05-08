const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];

let interval = null;

function drawRainbow(colorArray) {
    const rows = document.querySelectorAll('#rainbow tr');
    rows.forEach((row, index) => {
        row.firstElementChild.style.backgroundColor = colorArray[index];
    });
}

function shiftRainbow() {
    colors.unshift(colors.pop()); // переместить последний цвет в начало
    drawRainbow(colors);
}

function toggleAuto() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    } else {
        interval = setInterval(shiftRainbow, 300);
    }
}

// начальная отрисовка
drawRainbow(colors);
