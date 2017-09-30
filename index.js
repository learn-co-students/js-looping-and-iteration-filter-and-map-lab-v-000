function driversWithRevenueOver(driver, revenue) {
	return driver.filter( function(element) {
		return element.revenue > revenue
	})
}

function driverNamesWithRevenueOver(driver, revenue) {
	return driver.filter( function(element) {
		return element.revenue > revenue;
	}).map( function(element) {
		return element.name;
	})
}

function exactMatch(driver, matchObject) {
	let key = Object.keys(matchObject)[0]
	return driver.filter(function(element) {
		return matchObject[key] === element[key]
	})
}

function exactMatchToList(driver, matchObject) {
	let key = Object.keys(matchObject)[0]
	return driver.filter(function(element) {
		return matchObject[key] === element[key]
	}).map( function(element) {
		return element.name;
	})
}