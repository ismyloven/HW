

function complexFunction(arg1, arg2) {
	return arg1 + arg2;
}


function cache(func) {
	var obj = {};
	return function () {
		var args = [...arguments];
		if (args in obj) {
			console.log('Fetching from cache');
			return obj[args];
		} else {
			var value = func.apply(this, args);
			obj[args] = value;
			console.log('Calculating result');
			return value;
		}
	}
}


var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'baz'));
console.log(cachedFunction(9, 81));
console.log(cachedFunction(81, 9));
console.log(cachedFunction(10, 15));