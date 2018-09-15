// Code your solution here:
function driversWithRevenueOver(drivers, driverRevenue) {
	return drivers.filter(function (driver) {
		return driver.revenue > driverRevenue;
	});
}

function driverNamesWithRevenueOver(drivers, driverRevenue) {
	return driversWithRevenueOver(drivers, driverRevenue).map(function (driver) {
		return driver.name;
	});
}

function exactMatch(drivers, obj) {
	return drivers.filter(function (driver) {
		for (const key in obj) {
			return driver[key] === obj[key]
		}
	});
}

function exactMatchToList(drivers, obj) {
	return exactMatch(drivers, obj).map(function (driver) {
			return driver.name
	});
}