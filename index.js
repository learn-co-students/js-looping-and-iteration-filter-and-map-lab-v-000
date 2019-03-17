// Code your solution here:
function driversWithRevenueOver(arrayOfDriver, revenue) {
	return arrayOfDriver.filter(function(driver) {
		return driver.revenue > revenue
	})
}

function driverNamesWithRevenueOver(arrayOfDriver, revenue) {
	return driversWithRevenueOver(arrayOfDriver, revenue).map(function(driver) {
		return driver.name
	})
}

function exactMatch(arrayOfDriver, obj) {
	return arrayOfDriver.filter(function(driver) {
		matches = []
		for (const key in obj) {
			matches = driver[key] === obj[key]
		}

		return matches
	})
}

function exactMatchToList(arrayOfDriver, obj) {
	return exactMatch(arrayOfDriver, obj).map(function(driver) {
		return driver.name
	})
}