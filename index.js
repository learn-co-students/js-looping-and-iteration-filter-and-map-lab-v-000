function driversWithRevenueOver (drivers, revenue) {
	return drivers.filter((driver) => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
	return drivers.filter((driver) => driver.revenue > revenue).map((driver) => driver.name);
}

function exactMatch(drivers, attrs) {
	return drivers.filter(function(driver) { 
		for (const attr in attrs) {
			if (driver[attr] !== attrs[attr]) {
				return false;
			}
		}
		return true;
	});
}

function exactMatchToList(drivers, revenue) {
	return exactMatch(drivers, revenue).map((driver) => driver.name);
}