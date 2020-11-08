
// Second task



let biletCass25 = [];
let biletCass50 = [];
let biletCass100 = [];
let cash25 = 25;
let cash50 = 50;
let cash100 = 100;
let money;
let order;


function getTicket() {

		money = +prompt("Стоимость билета 25 грн", "");
                   if (money != 0) {
		


			if (money == cash25 || money != null && money != "" && money.length < 2) {
				biletCass25.push(money);
				order = alert("Сейчас я дам Ваш билет");

			}
			if (money == cash50 || money != null && money != "" && money.length < 2) {
				if (biletCass25[0] == 25) {
					biletCass25.pop(25);
					order = alert("Сейчас я дам Ваш билет и сдачу");
					biletCass50.push(money);
				} else {
					alert("У меня нет сдачи");
				}


			}
			if (money == cash100 || money != null && money != "" && money.length < 3) {
				if (biletCass25[0] == 25 && biletCass50[0] == 50) {
					biletCass50.pop(50);
					biletCass25.pop(25);
					order = alert("Сейчас я дам Ваш билет и сдачу");
					biletCass100.push(money);

				} else if (biletCass25.length >= 3) {
					biletCass25.splice(0, 3);
					order = alert("Сейчас я дам Ваш билет и сдачу");
					biletCass100.push(money);

				} else {
					alert("У вас будет купюры помельче?");
				}


			} else {
				console.log("Вас ждет чудесный спектакль. Стоимость билета 25 грн")
			}

			return getTicket();
		}
}

getTicket(25, 50, 100);
console.log(biletCass25);
console.log(biletCass50);
console.log(biletCass100);
console.log(biletCass25.concat(biletCass50, biletCass100));
