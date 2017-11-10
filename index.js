// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
	let driverName = []
	drivers.filter(driver => {
		 if (driver.revenue > revenue) {
		 		driverName.push(driver.name)
		 }  
	})
	return driverName
}

// function driverNamesWithRevenueOver (drivers, revenue) {
//   return driversWithRevenueOver(drivers, revenue)
//     .map(function (driver) {
//       return driver.name;
//     });
// }

function exactMatch(drivers, info) {
	let newDriver = []
	drivers.map(driver => {
		if (driver.name === info.name) {
			newDriver.push(driver)
		} else if (driver.revenue === info.revenue) {
			newDriver.push(driver)
		}
	})
	return newDriver
}

// function exactMatch (drivers, matcher) {
//   return drivers.filter(function (driver) {
//     let matches = false;

//     for (const key in matcher) {
//       matches = driver[key] === matcher[key];
//     }

//     return matches;
//   });
// }

function exactMatchToList(drivers, info) {
	let newDriver = []
	drivers.map(driver => {
		if (driver.name === info.name) {
			newDriver.push(driver.name)
		} else if (driver.revenue === info.revenue) {
			newDriver.push(driver.name)
		}
	})
	return newDriver
}

// function exactMatchToList (drivers, matcher) {
//   return exactMatch(drivers, matcher)
//     .map(function (driver) {
//       return driver.name;
//     });
// }