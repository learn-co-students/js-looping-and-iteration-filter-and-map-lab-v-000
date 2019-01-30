function driversWithRevenueOver(driversArray, revenueComp) {
	return driversArray.filter((driver) => {
		if (driver.revenue > revenueComp){
			return ({ name: driver.name, revenue: driver.revenue })
		}
	})
};

function driverNamesWithRevenueOver(driversArray, revenueComp) {
	const drivers = driversWithRevenueOver(driversArray, revenueComp);
	return drivers.map(driver => {
		return driver.name;
	})
};

function exactMatch(driversArray, toBeMatched) {
	return driversArray.filter((driver) => {
		let matchingObjects = null;
		for (let property in toBeMatched) {
			matchingObjects = driver[property] === toBeMatched[property]
		}
		return matchingObjects;
	});
};

function exactMatchToList(driversArray, toBeMatched){
	let drivers = exactMatch(driversArray, toBeMatched);
	return drivers.map(driver => {
	    return driver.name;
	});
};
