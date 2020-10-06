const apple = 12.50;
const discount = 15;
let ApplePrice;
let newApplePrice;

if (discount >= 0 && discount <= 100 && typeof (discount) === "number") {
	 ApplePrice = apple - (apple * discount / 100);
	 newApplePrice = (Math.floor(ApplePrice * 100) / 100).toFixed(2);
} else {
	newApplePrice = "Введите корректно скидку";

}

console.log(newApplePrice);


const orange = 12.50;
const markup = 15;
let orangePrice;
let newOrangePrice;


if (markup >= 0 && typeof (markup) === "number") {
	 orangePrice = orange + (orange * markup / 100);
	 newOrangePrice = (Math.floor(orangePrice * 100) / 100).toFixed(2);
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
