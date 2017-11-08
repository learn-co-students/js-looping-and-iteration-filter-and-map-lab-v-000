// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(function(driver) {
		return driver.revenue > revenue;
	});
};

function driverNamesWithRevenueOver(drivers, revenue) {
	return driversWithRevenueOver(drivers, revenue).map(function(driver) {
		return driver.name;
	});
};

function exactMatch(drivers, attribute) {
	return drivers.filter(function(driver) {
		for (const key in attribute) { // For each key in attribute
			return driver[key] === attribute[key]; // return where key in driver matches key from attribute
		};
	});
};

// exactMatch() = returns an array of all matching drivers.
// returns an empty array if there is no match

function exactMatchToList(drivers, attribute) {
	return exactMatch(drivers, attribute).map(function(driver) {
		return driver.name
	});
};