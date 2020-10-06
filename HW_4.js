// первое задание

const apple = 12.500000000000;
const discount = 100;
var priceList = '';
let ApplePrice;
let newApplePrice;



if (discount >= 0 && discount <= 100 && typeof (discount) === "number" ) {
  ApplePrice = apple - (apple * discount / 100);
  newApplePrice = (Math.floor(ApplePrice * 100) / 100).toFixed(2);
  console.log(priceList = `Яблоки украинские.
цена: ${newApplePrice} грн`);

} else {

  console.log("Вы ввели неправильную скидку");
}

// Второе задание

var cord = "Ismailov xochet stat programmistom";


if (typeof (cord) === "string" && cord.length < 10) {

  for (var i = 0; i < cord.length; i++) {
    console.log(cord.charAt(i));
  }

} else if (typeof (cord) === "number" || cord === undefined) {
  console.log('Введите значение, используя буквы');
} else {
  console.log(cord.substring(0, 7));
  console.log(cord.substring(9));
}
