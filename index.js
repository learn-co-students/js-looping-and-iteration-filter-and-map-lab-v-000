// Code your solution here:
function driversWithRevenueOver (drivers, amount) {
	return drivers.filter(function (driver) { return driver.revenue >= amount });
}

function exactMatch (drivers, obj) {
	const objKey = Object.keys(obj)[0];
	return drivers.filter(function (driver) { return driver[objKey] === obj[objKey] });
}

function driverNamesWithRevenueOver (drivers, revenue) {
	const newDrivers = driversWithRevenueOver(drivers, revenue);
	return newDrivers.map(function(driver) {return driver.name });
}

function exactMatchToList (drivers, obj) {
	const matchedDrivers = exactMatch(drivers, obj);
	return matchedDrivers.map(function (driver) { return driver.name });
}