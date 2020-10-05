const apple = 12.50;
const discount = 15;


if (discount >= 0 && discount <= 100 && typeof (discount) === "number") {
	var ApplePrice = apple - (apple * discount / 100);
	var newApplePrice = Math.floor(ApplePrice * 100) / 100;
} else {
	newApplePrice = "Введите корректно скидку";

}

console.log(newApplePrice);


const orange = 12.50;
const markup = 15;

if (markup >= 0 && typeof (markup) === "number") {
	var orangePrice = orange + (orange * markup / 100);
	var newOrangePrice = Math.floor(orangePrice * 100) / 100;
} else {

	newOrangePrice = "Введите корректно наценку";

}


console.log(newOrangePrice);


let priceList = `Яблоки украинские.
цена: ${newApplePrice} грн`;

console.log(priceList);


let appleRoster = `Яблоки украинские.`;

let priceRegister = `${appleRoster} 
цена: ${newApplePrice} грн`;

console.log(priceRegister);