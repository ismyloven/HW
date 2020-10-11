// первое задание

const apple = 12.500000000000;
const discount = 100;
var priceList = '';
let ApplePrice;
let newApplePrice;



if (discount >= 0 && discount <= 100 && typeof (discount) === "number" ) {
<<<<<<< HEAD
	ApplePrice = apple - (apple * discount / 100);
	newApplePrice = (Math.floor(ApplePrice * 100) / 100).toFixed(2);
	console.log(priceList = `Яблоки украинские.
=======
  ApplePrice = apple - (apple * discount / 100);
  newApplePrice = (Math.floor(ApplePrice * 100) / 100).toFixed(2);
  console.log(priceList = `Яблоки украинские.
>>>>>>> 0c0b1744463e15358fb94707a5df6e9d80e5cfe9
цена: ${newApplePrice} грн`);

} else {

  console.log("Вы ввели неправильную скидку");
}

// Второе задание

var cord = "Ismailov ne xochet stat programmistom";


if (typeof (cord) === "string" && cord.length < 10) {

  for (var i = 0; i < cord.length; i++) {
    console.log(cord.charAt(i));
  }

} else if (typeof (cord) === "number" || cord === undefined) {
  console.log('Введите значение, используя буквы');
} else {
<<<<<<< HEAD
	console.log(cord.substring(0, 7));
	console.log(cord.substring(9));
}
=======
  console.log(cord.substring(0, 7));
  console.log(cord.substring(9));
}
>>>>>>> 0c0b1744463e15358fb94707a5df6e9d80e5cfe9
