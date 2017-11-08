// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(function(driver) {
		return driver.revenue > revenue
	});
};

function driverNamesWithRevenueOver(drivers, revenue) {
	return driversWithRevenueOver(drivers, revenue).map(function(driver) {
		return driver.name
	});
};

function exactMatch(drivers, obj) {
	return drivers.filter(function(driver) {
		let objs = false

		for(const key in obj) {
			objs = driver[key] === obj[key];
		}
		return objs;
	});
};

function exactMatchToList(drivers, obj) {
	return exactMatch(drivers, obj).map(function(driver) {
		return driver.name;
	});
};