// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter( driver => { return driver.revenue > revenue; });
};

function driverNamesWithRevenueOver( drivers, revenue) {
	return driversWithRevenueOver( drivers, revenue ).map( driver => { return driver.name; }); 
};

function exactMatch(drivers, matcherObj ) {
	return drivers.filter( driver => { let matches = false;
			for (const key in matcherObj ){
				matches = driver[key] === matcherObj[key];
			}

			return matches;
	   })
};

function exactMatchToList(drivers, matcherObj ) {
	return exactMatch( drivers, matcherObj ).map( driver => {
		return driver.name;
	})
};