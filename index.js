// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
	return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, match) {
	let key = undefined;
	for (const k in match) {
		key = k;
	}
	return drivers.filter(driver => (driver[key] == match[key]))
}

function exactMatchToList(drivers, match) {
	return exactMatch(drivers, match).map(driver => driver.name)
}
