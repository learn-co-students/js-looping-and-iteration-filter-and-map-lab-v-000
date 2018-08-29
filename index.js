// Code your solution here:

function driversWithRevenueOver (drivers, amount) {
	return drivers.filter( function (driver) { return driver.revenue > amount; })
}


function driverNamesWithRevenueOver (drivers, amount) {
	let newDrivers = [];
	drivers.map( function (driver) { if (driver.revenue > amount) { newDrivers.push(driver.name) }; })
	return newDrivers;
}


function exactMatch (drivers, hash) {
	let newDrivers = [];

	drivers.filter( function (driver) { if (hash.name === driver.name || hash.revenue === driver.revenue) { newDrivers.push(driver); } } )
	return newDrivers;
}


function exactMatchToList (drivers, hash) {
	let newDrivers = [];

	drivers.map( function (driver) { if (hash.name === driver.name || hash.revenue === driver.revenue) { newDrivers.push(driver.name); } } )
	return newDrivers;
	
}




function lowerCaseDrivers (list) {
  return list.map(function (driver) {
    return driver.toLowerCase();
  });
}