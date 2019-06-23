function driversWithRevenueOver(drivers, rev){
 return drivers.filter(d => d.revenue > rev);
}

function driverNamesWithRevenueOver(drivers, rev){
	return drivers.filter(d => d.revenue > rev)
								.map(obj => obj.name);
}

function exactMatch(drivers, match){
	return drivers.filter(driver => driver.name === match.name || driver.revenue === match.revenue);
}

function exactMatchToList(drivers, match){
	return drivers.filter(driver => driver.name === match.name || driver.revenue === match.revenue)
	              .map(obj => obj.name);
}