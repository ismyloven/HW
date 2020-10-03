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


