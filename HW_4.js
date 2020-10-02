// первое задание

const apple = 12.50;
let discount= 15;
let priceList = '';

if(discount > 0 && discount <=100 && typeof(discount) === "number"){
	var ApplePrice = apple - (apple * discount/ 100);
	var newApplePrice = Math.floor(ApplePrice * 100) / 100;
	console.log(priceList = `Яблоки украинские.
цена: ${newApplePrice} грн`);

}else if(discount === 0 || discount === undefined){
	console.log(priceList = `Яблоки украинские.
цена: ${apple} грн`);

} else{

	console.log("Вы ввели неправильную скидку");
}

// Второе задание

var stroka="Ismailov Nail";


if (typeof(stroka) === "string" && stroka.length< 10){

	for (var i = 0; i < stroka.length; i++ ){
		console.log(stroka.charAt(i));
	}

} else if (typeof(stroka) === "number" || stroka === undefined){
	console.log('Введите значение, используя буквы');
}else {
	console.log(stroka.substring(0,7)+ ' ' + stroka.substring(9));
}

