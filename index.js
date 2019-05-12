// Code your solution here:

function driversWithRevenueOver( object, string ) {
	return object.filter( function(driver) { return driver.revenue > string })
}

function driverNamesWithRevenueOver( object, string ) {
	const drivers = driversWithRevenueOver( object, string );
	return 	drivers.map( function(driver) { return driver.name })
}

function exactMatch(array, object) {
	key = Object.keys(object);
	return array.filter( function(driver) {return driver[key] === object[key]});
	// const drivers = 
	// const drivers = array
}

function exactMatchToList(array, object) {
	const drivers = exactMatch(array, object);
	return drivers.map( function (driver) {return driver.name });
}