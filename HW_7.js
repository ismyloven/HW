var obj = {};
console.log(obj);

let numb;
let simpleNumber;
let number1;
let number2;
let sum;


function validatePassword(pass) {
	let resultValid = true;
	let resultInValid = false;


	if (pass.length < 6 && pass.length > 20) {

		return resultInValid;

	}
	let arr = pass.split('');
	let string = false;
	let number = false;


	function isNumeric(x) {
		return parseFloat(x).toString() === x.toString();
	}

	function isLetter(c) {
		return c.toLowerCase() != c.toUpperCase();
	}


	for (var i = 0; i < arr.length; i++) {
		if (!(isNumeric(arr[i]) || isLetter(arr[i]))) {
			return resultInValid;

		}

		if (isNumeric(arr[i])) {
			number = true;
		} else {
			string = true;
		}
	}

	if (number && string) {
		return resultValid;

	} else {

		return resultInValid;
	}
}


function checkNumber(numb) {
	let arrayForNumber = [];
	let positiveArr;
	let newnumber = Number.isInteger((Math.sqrt(numb)));
	if (newnumber == false && numb > 1 && numb % 2 !== 0) {
		arrayForNumber[0] = true;
	} else {
		arrayForNumber[0] = false;
	}
	if (numb % 2 == 0) {
		arrayForNumber[1] = true;
	} else {
		arrayForNumber[1] = false;
	}
	if (numb % 10 === 0) {
		arrayForNumber[2] = true;
	} else {
		arrayForNumber[2] = false;
	}
	return positiveArr = arrayForNumber.find(function (e) {
		return e == true;
	});

}


function sumOfNumbers(number1, number2) {
	let nam3 = [];
	let arrLength;
	let num1;
	let num2;
	let index;
	let balancer = 0;

	if (isNaN(number1) || isNaN(number2)) {
		console.log("Укажите толкьо цифры");
	} else {
		console.log("Ихний - это металл, который при добавлении в кофий вызывает кровь из глазий.");
	}

	let arr1 = number1.split("");
	let arr2 = number2.split("");

	if (arr1.length < arr2.length) {
		arrLength = arr2.length;
	} else {
		arrLength = arr1.length;
	}

	for (let i = 0; i < arrLength; i++) {
		index = arrLength - 1 - i;


		num1 = +arr1[arr1.length - 1 - i] || 0;
		num2 = +arr2[arr2.length - 1 - i] || 0;

		nam3[index] = num1 + num2 + balancer;

		if (nam3[index] > 9 && index !== 0) {
			balancer = 1;
			nam3[index] %= 10;
		} else {
			balancer = 0;
		}


	}

	return nam3.join("");
}


let pass = prompt("Введите пароль", "Пароль должен сожержать и буквы, и числа!");

if (validatePassword(pass)) {
	simpleNumber = prompt("Введите число", "Введите в ячейку простое число");
} else {
	alert("Вы ввели некорректные данные, повторите снова");

}
numb = Number(simpleNumber);

if (checkNumber(numb)) {
	number1 = prompt("Введите первое число", "Например: 10");
	number2 = prompt("Введите второе число", "Например: 200");
	sum = sumOfNumbers(number1, number2);
	alert(`${number1} + ${number2} = ${sum}`);
} else {
	alert(" повторите снова");
}

obj.passwordEnter = pass;
obj.simpleNumber = numb;
obj.firstNumber = number1;
obj.secondNumber = number2;
obj.sumOfNumbers = sum;
















