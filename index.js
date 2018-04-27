function driversWithRevenueOver(drivers, revenue){
	return drivers.filter(driver => driver.revenue >revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
	return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, obj){
	let match = [];
    drivers.filter(driver => {
		for (let key in obj ) {
			if (obj[key] === driver[key]) {
				match.push(driver);
			}
		}
			
 }) 
 return match
}

function exactMatchToList(drivers, obj){
	return exactMatch(drivers, obj).map(driver => driver.name)
}