// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(function(driver) {
		return driver.revenue > revenue
	})
}

function driverNamesWithRevenueOver(drivers, revenue) {
	makers = driversWithRevenueOver(drivers, revenue)
	return makers.map(function(driver) {
		return driver.name
	})
}

function exactMatch(drivers, obj) {
	return drivers.filter(function(driver) {
		return driver[Object.keys(obj)[0]] === Object.values(obj)[0]
	})
}

function exactMatchToList(drivers, obj) {
	makers = exactMatch(drivers, obj)
	return makers.map(function(driver) {
		return driver.name
	})
}