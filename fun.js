// Функция для изменения фамилии
function changeLastName() {
    const lastNameInput = document.getElementById('lastNameInput');
    const lastNameElement = document.getElementById('lastName');

    if (lastNameInput.value.trim() !== '') {
        lastNameElement.textContent = lastNameInput.value;
        lastNameInput.value = '';
        alert('Фамилия успешно изменена!');
    } else {
        alert('Пожалуйста, введите новую фамилию');
    }
}

// Функция для изменения цвета фона
function changeBgColor() {
    const colors = ['#f5f5f5', '#e3f2fd', '#e8f5e9', '#fff3e0', '#fce4ec'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Функция проверки возраста (из задания 3)
function askAge() {
    let age;
    do {
        age = prompt('Пожалуйста, введите ваш возраст:');
        if (age === null) continue;

        const isCorrect = confirm(`Вы ввели возраст: ${age}. Это правильно?`);
        if (isCorrect) {
            alert("Спасибо! Ваш возраст принят.");
            return;
        }
    } while (true);
}

// Дополнительно: можно добавить другие функции
document.addEventListener('DOMContentLoaded', function () {
    console.log('Резюме загружено!');
});