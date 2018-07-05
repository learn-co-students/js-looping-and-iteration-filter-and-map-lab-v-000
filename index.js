function driversWithRevenueOver(drivers, amount) {
	return drivers.filter(driver => driver.revenue > amount)	
}

function driverNamesWithRevenueOver(drivers, amount) {
	let answer = [];
	drivers.filter(function(driver){
		if (driver.revenue > amount) {
			answer.push(driver.name);
		}
	})
	return answer;
}

function exactMatch(drivers, attribute) {
	return drivers.filter(function(driver){
		return driver[Object.keys(attribute)[0]] === Object.values(attribute)[0];
	})
}

function exactMatchToList(drivers, attribute) {
	return exactMatch(drivers, attribute).map(driver => driver.name);
}