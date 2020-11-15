const cofeLatte = {
	cream: 50,
	espresso: 50,
	milk: 150,
	sugar: 10
};

var whatHave = {
	cream: 250,
	espresso: 350,
	milk: 450,
	sugar: 50,
	potatos: 20,
	soda: 5,
	chokolate: 100,
	bred: 100,
	butter: 250
}

function comparison(obj1, obj2) {

	var common = Object.keys(obj1).filter({}.hasOwnProperty.bind(obj2)).sort();
	var values = common.map(key => obj1[key]);
	var values2 = common.map(key => obj2[key]);
	var cofeLatte1 = Object.keys(obj1).sort();
	var portionArray = [];


	if (cofeLatte1.length === common.length) {
		alert("Отлично, все нужное для кофе в холодильнике есть");


		for (let i = 0; i < common.length; i++) {
			var difference = values2[i] / values[i];
			portionArray.push(difference);

		}

		var portion = Math.min.apply(null, portionArray);

		return alert(`Из этого всего можно получить ${portion} порций кофе`);

	} else {
		alert("Кофе сегодня не будет");
	}
}

comparison(cofeLatte, whatHave);


