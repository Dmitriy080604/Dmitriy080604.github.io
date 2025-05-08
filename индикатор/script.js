function setValue(num) {
    const range = document.getElementById('range');
    range.value = num;

    if (num > 5) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'white';
    }
}
