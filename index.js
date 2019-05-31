function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(function(driver) {
		return driver.revenue > revenue;
	})
}

function driverNamesWithRevenueOver(drivers, revenue) {
	let newDrivers = driversWithRevenueOver(drivers, revenue);
	return newDrivers.map(function(driver) {
		return driver.name;
	})
}

function exactMatch(drivers, obj) {
	let key = Object.keys(obj)
	return drivers.filter(function(driver) {
		return driver[key] === obj[key];
	})
}

function exactMatchToList(drivers, obj) {
	let matches = exactMatch(drivers, obj);
	return matches.map(function(driver) {
		return driver.name;
	})
}
