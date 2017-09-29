function driversWithRevenueOver(driver, revenue) {
	return driver.filter(driverObj => driverObj.revenue >= revenue);
}

function driverNamesWithRevenueOver(driver, revenue) {
	const driversObj = driversWithRevenueOver(driver, revenue);
	return driversObj.map(obj => obj.name);
}

function exactMatch(driver, Obj) {
	return driver.filter(function(driverObj) {
		const searchField = Object.keys(Obj)[0] //'name' or 'revenue'
		return driverObj[searchField] === Obj[searchField]
	})
}

function exactMatchToList(driver, Obj) {
	const driverObj = exactMatch(driver, Obj)
	return driverObj.map(obj => obj.name)
}