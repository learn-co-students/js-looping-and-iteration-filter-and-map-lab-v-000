// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
	function revenueOver (obj) {
		return parseInt(obj['revenue']) >= revenue;
	}
	
	return drivers.filter(revenueOver);
}

function driverName (driver) {
	return driver['name'];
}

function driverNamesWithRevenueOver(drivers, revenue) {
	const filtDrivers = driversWithRevenueOver(drivers, revenue);
	return filtDrivers.map(driverName);
}

function exactMatch (drivers, matchObj) {
	function isMatch (driver) {
		const matchKey = Object.keys(matchObj)[0];
		const driverVal = driver[matchKey];
		const matchVal = matchObj[matchKey];
		return driverVal === matchVal;
	}

	return drivers.filter(isMatch);
}

function exactMatchToList(drivers, matchObj) {
	const exMatch = exactMatch(drivers, matchObj);
	return exMatch.map(driverName);
}
