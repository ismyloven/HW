// first task


for (var i = 0; i < 10; i++) {
	setTimeout((function (item) {
		return function () {
			console.log(item);
		}
	})(i + 1), 10)
}

for (var i = 0; i < 10; i++) {
	(function (item) {
		setTimeout(function () {
			console.log(item);
		}, 10);
	})(i + 1);
}


// second task

var math = {
	result: 0,

	sum: function (a) {
		this.result = a + a;
		return this;
	},


	minus: function (a) {
		this.result = this.result - a;
		return this;
	},

	multiplay: function (a) {
		this.result = this.result * a;
		return this;
	},

	showResult: function () {

		return this.result;
	}
}

math.sum(2).sum(2).minus(2).multiplay(2).showResult();
console.log(math.result);