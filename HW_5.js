<<<<<<< HEAD
let number1 = "123";
let number2 = "45";

if (isNaN(number1) || isNaN(number2)) {
	alert("Укажите толкьо цифры");
} else {
	let sum = sumOfNumbers(number1, number2);

	console.log(`${number1} + ${number2} = ${sum}`);
}

function sumOfNumbers(number1, number2) {
	let nam3 = [];
	let arrLength;
	let num1;
	let num2;
	let index;
	let balancer = 0;

	let arr1 = number1.split("");
	let arr2 = number2.split("");

	if (arr1.length < arr2.length) {
		arrLength = arr2.length;
	} else {
		arrLength = arr1.length;
	}

	for (let i = 0; i < arrLength; i++) {
		index = arrLength - 1 - i;

=======
// Первое задание

let number1 = "123";
let number2 = "45";
>>>>>>> 0c0b1744463e15358fb94707a5df6e9d80e5cfe9

if (isNaN(number1) || isNaN(number2)) {
  alert("Укажите толкьо цифры");
} else {
  let sum = sumOfNumbers(number1, number2);

<<<<<<< HEAD
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
=======
 console.log(`${number1} + ${number2} = ${sum}`);
}

function sumOfNumbers(number1, number2) {
  let nam3 = [];
  let arrLength;
  let num1;
  let num2;
  let index;
  let balancer = 0;

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
>>>>>>> 0c0b1744463e15358fb94707a5df6e9d80e5cfe9
}


// Второе задание

function validatePassword(pass){
	if (pass.length < 6 && pass.length>20){
		console.log("INVALID");
		return;
	}
	var arr =pass.split('');
	var string = false;
	var number = false;


	for(var i = 0; i<arr.length; i++ ){
		if(!(isNumeric(arr[i]) || isLetter(arr[i])) ){
			console.log("INVALID");
			return;
		}

		if(isNumeric(arr[i])) {
			number = true
		} else {
			string = true
		}
	}

	if(number && string) {
		console.log("VALID");
		return;
	}

	console.log("INVALID");
}




function isNumeric(x) {
	return parseFloat(x).toString() === x.toString();
}


function isLetter(c) {
	return c.toLowerCase() != c.toUpperCase();
}


validatePassword("pass1223333");


// Третье задание


function checkNumber(numb) {
	let arrayForNumber = [];
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
	return console.log(arrayForNumber);
}


checkNumber(5);