// Code your solution here:

function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (filteredDriver) {
      return filteredDriver.name;
    });
}

function exactMatch (drivers, object) {
  return drivers.filter(function (driver) {
    let matches = false;
    for (const key in object) {
      matches = driver[key] === object[key];
    }
    return matches;
  });
}

function exactMatchToList (drivers, object) {
  return exactMatch(drivers, object)
    .map(function (filteredDriver) {
      return filteredDriver.name;
    });
}
