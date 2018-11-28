// Code your solution here:

function driversWithRevenueOver(drivers, amount) {
	return drivers.filter(function(driver) {
		return driver.revenue > amount;
	})
}

function driverNamesWithRevenueOver(drivers, amount) {
	const listOfDrivers = driversWithRevenueOver(drivers, amount);
	return listOfDrivers.map(function(driver) {
		return driver.name;
	})
}

function exactMatch(drivers, attribute) {
	return drivers.filter(function(driver) { 
		for (const key in attribute) {
			return driver[key] === attribute[key] 
		}
	})
}

function exactMatchToList(drivers, attribute) {
	return exactMatch(drivers,attribute)
		.map(function(driver) {
			return driver.name;
		})
}