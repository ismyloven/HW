const cofeLatte = {
	cream: 50,
	espresso: 50,
	milk: 150,
	sugar: 10
};

let whatHave = {};
let firstIngredients;
let secondIngredients;
let thirdIngredients;
let fourthIngredients;
let portion;


function getСofe() {

	firstIngredients = +prompt("Сколько у тебя есть эспрессо", "");

	if (firstIngredients === cofeLatte.espresso || firstIngredients != null && firstIngredients != "" && firstIngredients.length <= 2) {
		console.log("Будем варить кофе");
		whatHave.espresso = firstIngredients;

	} else {
		console.log("Идем дальше");
		whatHave.espresso = firstIngredients;

	}

	secondIngredients = +prompt("Сколько у тебя есть молока", "");
	if (secondIngredients === cofeLatte.milk || secondIngredients != null && secondIngredients != "" && secondIngredients.length <= 3) {
		console.log("Будем варить кофе");
		whatHave.milk = secondIngredients;

	} else {
		console.log("Идем дальше");
		whatHave.milk = secondIngredients;

	}
	thirdIngredients = +prompt("Сколько у тебя есть пены", "");
	if (thirdIngredients === cofeLatte.cream || thirdIngredients != null && thirdIngredients != "" && thirdIngredients.length <= 2) {
		console.log("Будем варить кофе");
		whatHave.cream = thirdIngredients;

	} else {
		console.log("Идем дальше");
		whatHave.cream = thirdIngredients;

	}

	fourthIngredients = +prompt("Сколько у тебя есть сахара", "");
	if (fourthIngredients === cofeLatte.cream || fourthIngredients != null && fourthIngredients != "" && fourthIngredients.length <= 2) {
		console.log("Будем варить кофе");
		whatHave.sugar = fourthIngredients;

	} else {
		console.log("Идем дальше");
		whatHave.sugar = fourthIngredients;

	}

	if (whatHave.cream == cofeLatte.cream && whatHave.espresso == cofeLatte.espresso && whatHave.milk == cofeLatte.milk && whatHave.sugar == cofeLatte.sugar) {
		alert(" у тебя получился отличный кофе");
	} else {
		if ((whatHave.cream - cofeLatte.cream) >= 1 && (whatHave.espresso - cofeLatte.espresso) >= 1 && (whatHave.milk - cofeLatte.milk) >= 1 && (whatHave.sugar - cofeLatte.sugar) >= 1) {
			alert("Одну порцию кофе ты точно сможешь выпить");

		} else {
			alert("Я тебе не рекомендую это пить!");
		}

	}


	return whatHave;
}


console.log(getСofe());

console.log(whatHave);


