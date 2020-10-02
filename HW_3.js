const apple = 12.50;
let discount= 15;

if(discount === undefined){

	newApplePrice = apple;


} else if (discount >= 0 && discount <=100 && typeof(discount) === "number"){
	var ApplePrice = apple - (apple * discount/ 100);
	var newApplePrice = Math.floor(ApplePrice * 100) / 100;
}  else {
	newApplePrice = "Введите корректно скидку";

}

console.log( newApplePrice);




let orange = 12.50;
let markup = 15;

if(markup === undefined){

	newOrangePrice = orange;

}else if(markup >= 0 && typeof(markup) === "number"){
	var orangePrice = orange + (orange * markup/ 100);
	var newOrangePrice = Math.floor(orangePrice * 100) / 100;
} else {

	newOrangePrice = "Введите корректно наценку";

}


console.log(newOrangePrice);




let priceList = `Яблоки украинские.
цена: ${newApplePrice} грн`;

console.log(priceList);


let appleTag = `Яблоки украинские.`;

let priceTag = `${appleTag} 
цена: ${newApplePrice} грн`;

console.log(priceTag);
