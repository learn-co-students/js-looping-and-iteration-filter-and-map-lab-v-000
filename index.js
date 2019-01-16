// Code your solution here:

function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, value) {
	return drivers.filter(function (driver) {
		let match = false

		for (const key in value) {
      		match = driver[key] === value[key]
    	}
    return match
	});
}

function exactMatchToList(drivers, value) {
	return exactMatch(drivers, value).map(function (driver) {
    return driver.name
  });
}