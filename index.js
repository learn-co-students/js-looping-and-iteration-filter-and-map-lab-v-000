function driversWithRevenueOver(collection, num) {
	return collection.filter(function(person) {
		return person.revenue > num;
	});
}

function driverNamesWithRevenueOver(collection, num) {
	let drivers = driversWithRevenueOver(collection, num);
	return drivers.map(function(person) {
		return person.name;
	});
}

function exactMatch(collection, obj) {
	return collection.filter(function(person) {
		let matches = false;

		for (const x in obj) {
			matches = person[x] === obj[x];
		}
	return matches;
	});
}

function exactMatchToList(collection, obj) {
	let drivers = exactMatch(collection, obj)
	return drivers.map(function(person) {
		return person.name;
	});
}