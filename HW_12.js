var math = {
	result: 0,

	sum: function (a) {
		this.result = a + a;
		return this;
	},

	sum1: function (a) {
		this.result = this.result + a;
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

math.sum(1).sum1(1).minus(1).multiplay(1).showResult();
console.log(math.result);