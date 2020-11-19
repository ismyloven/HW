function complexFunction(arg1, arg2) {
	return arg1 + arg2;
}


function cache(func) {
	var obj = {};
	return function () {
		var args = [...arguments].reduce((sum, currentEl) => (sum + currentEl));
		if (args in obj) {
			console.log('result from cache');
			return obj[args];
		} else {
			var value = func.apply(this, arguments);
			obj[args] = value;
			console.log('сalculating result');
			return value;
		}
	}
}


var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'baz'));
console.log(cachedFunction(5, 10));
console.log(cachedFunction(10, 5));
console.log(cachedFunction(10, 15));