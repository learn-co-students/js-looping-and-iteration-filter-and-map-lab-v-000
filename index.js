// Code your solution here:
function driversWithRevenueOver(drivers, amount){
	let array = [];
	drivers.map(function (x){
		if (x.revenue > amount){
			array.push(x);
		}
	});
	return array;
}

function driverNamesWithRevenueOver(drivers, amount){
	let array = [];
	drivers.map(function (x){
		if (x.revenue > amount){
			array.push(x.name);
		}
	})
	return array;
}

function exactMatch(drivers, attribute){
	let array = [];
	drivers.map(function(x){
		for (const key in x){
			for (const key2 in attribute){
				if (attribute[key2] === x[key]) {
					array.push(x)
				}
			}

		}
	});

	return array;
}

function exactMatchToList(drivers, attribute) {
	let array = [];
	drivers.map(function(x){
		for (const key in x){
			for (const key2 in attribute){
				if (attribute[key2] === x[key]) {
					array.push(x.name)
				}
			}

		}
	});

	return array;
}