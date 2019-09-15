// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
    return drivers.filter(function(driver) {
        return driver.revenue > rev;
    });
}

function driverNamesWithRevenueOver(drivers, rev) {

    return driversWithRevenueOver(drivers, rev)

	.map(function(driver){
		return driver.name;
	});
}

function exactMatch(drivers, obj) {
  	return drivers.filter(function(driver){
		if (driver.name === obj.name) {
			return driver.name;
		} else if (driver.revenue === obj.revenue){
			return driver.revenue;
		}
	});
}

function exactMatchToList(drivers, obj) {

	return exactMatch(drivers, obj)

	.map(function(driver) {
		return driver.name;
	});

}
