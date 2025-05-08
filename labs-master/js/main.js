let trigger = 0;
let name, age, sex, hobby;
let education, mathematic, asu, cutting, programming, english;

document.getElementById("startTest").addEventListener("click", test);

function test() {
	do {
		name = prompt("Введите имя:");
	} while (!/^[а-яА-Яa-zA-Z]+$/.test(name));

	do {
		age = prompt("Введите возраст:");
	} while (!/^\d+$/.test(age) || parseInt(age) < 0);

	do {
		sex = prompt("Введите пол (М/Ж):");
	} while (!/^[МЖмж]$/.test(sex));

	education = confirm("У вас есть высшее образование?");
	mathematic = confirm("Вы знаете математику?");
	asu = confirm("Вы знаете АСУ ТП?");
	cutting = confirm("Вы знаете теорию резания?");
	programming = confirm("Умеете программировать?");
	english = confirm("Вы знаете английский язык?");
	hobby = prompt("Ваше хобби:");

	writeToPage();
}

function writeToPage() {
	$("#name").val(name);
	$("#age").val(age);
	$("#sex").val(sex);
	$("#hobby").val(hobby);
	document.getElementById("education").checked = education;
	document.getElementById("mathematic").checked = mathematic;
	document.getElementById("asu").checked = asu;
	document.getElementById("cutting").checked = cutting;
	document.getElementById("programming").checked = programming;
	document.getElementById("english").checked = english;

	trigger = 1;

	// Запретить изменение чекбоксов
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	checkboxes.forEach(cb => cb.disabled = true);

	// Скрыть кнопку
	document.getElementById("startTest").style.display = "none";

	myFunction();
}

function myFunction() {
	const x = document.getElementById("div1");

	if (trigger === 1) {
		if (
			document.getElementById("education").checked &&
			document.getElementById("mathematic").checked &&
			document.getElementById("programming").checked
		) {
			x.innerHTML = '<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>';
		} else {
			x.innerHTML = '<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>';
		}
		x.style.display = "block";
	}
}
