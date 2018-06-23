function driversWithRevenueOver(drivers, revenue) {
  let result = drivers.filter(function(driver) {return driver.revenue > revenue;});
  return result
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = drivers.filter(function(driver) {return driver.revenue > revenue;});
  return result = newDrivers.map(function(newDriver) {return newDriver.name;});
}

function exactMatch(arr, criteria) {
  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    });
  });
}

function exactMatchToList(arr, criteria) {
  let newDrivers = arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    });
  });
  return newDrivers.map(function(newDriver) {return newDriver.name;});
}
