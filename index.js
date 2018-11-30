// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, kvObject) {
  return drivers.filter(function(driver) {
    let matches = []

    for (const key in kvObject) {
      matches = driver[key] === kvObject[key];
    }

    return matches;
  })
}

function exactMatchToList (drivers, kvObject) {
  return exactMatch(drivers, kvObject).map(function(driver) {
    return driver.name;
  })
}
