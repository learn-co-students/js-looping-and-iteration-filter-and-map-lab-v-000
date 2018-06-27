function driversWithRevenueOver(arr, str) {
	return arr.filter(i => i.revenue > str);
}

function driverNamesWithRevenueOver(arr, str) {
	const newArr = []
	arr.forEach(function(element) {
		if(element.revenue > str) {
			newArr.push(element.name);
		}
	})
	return newArr;
}

function exactMatch(arr, obj) {
	const newArr = [];
	arr.forEach(function(element) {
		if(element.revenue === Object.values(obj)[0] || element.name === Object.values(obj)[0]) {
			newArr.push(element);
		}
	})
	return newArr;
}

function exactMatchToList(arr, obj) {
	const newArr = [];
	arr.forEach(function(element) {
		if(element.revenue === Object.values(obj)[0] || element.name === Object.values(obj)[0]) {
			newArr.push(element.name);
		}
	})
	return newArr;
}