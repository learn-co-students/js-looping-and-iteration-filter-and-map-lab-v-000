

function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
  	return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
	return driversWithRevenueOver(drivers, revenue)
	.map(function (driver) {
		return driver.name;
	});
}

function exactMatch (drivers, binger) {
	return drivers.filter(function (driver) {
		let hits = false;

		for (const key in binger) {
			hits = driver[key] === binger[key];
		}

		return hits;
	});
}

function exactMatchToList (drivers, binger) {
	return exactMatch(drivers, binger)
	
	.map(function (driver) {
		return driver.name;
	});
}

// Code your solution here:

