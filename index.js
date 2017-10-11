// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	const newCollection = [];
	for (const driver of drivers) {
		if (driver.revenue > revenue) {
			newCollection.push(driver);
		}
	}
	return newCollection;
}

function driverNamesWithRevenueOver(drivers, revenue) {
	const array = driversWithRevenueOver(drivers, revenue);
	return array.map(function(driver) { return driver.name});
}

function exactMatch(list, attribute) {
	const key = Object.keys(attribute)[0];
return list.filter(function(item) {		
		return item[key] === attribute[key]; 
	});
}

function exactMatchToList(extendedDrivers, attribute) {
	return exactMatch(extendedDrivers, attribute).map(function(driver) {return driver.name}); 
} 
