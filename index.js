// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(function(driver) {
		return driver.revenue > revenue;
	})
}

function driverNamesWithRevenueOver(drivers, revenue) {
	return driversWithRevenueOver(drivers, revenue).map(function(driver) {
		return driver.name;
	})
}

function exactMatch(drivers, attributeObj) {
	let key = function() { for (const key in attributeObj) {
				return key;
			  }};
	return drivers.filter(function(driver) {
		return driver[key()] == attributeObj[key()];
	});
}

function exactMatchToList(drivers, attributeObj) {
	return exactMatch(drivers, attributeObj).map(function(driver) {
		return driver.name;
	})
}
