// Первое задание
const arr1 = "9977777777777";
const arr2 = "01";

var sum = parseFloat(arr1) + parseFloat(arr2);


console.log(sum);



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


checkNumber(2);

