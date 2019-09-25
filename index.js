// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue );
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = drivers.filter(driver => driver.revenue > revenue );
  return newDrivers.map(newDriver => newDriver.name );
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0];
  });
}

function exactMatchToList(drivers, obj) {
  list = exactMatch(drivers, obj)
    return list.map(function(driver) {
      return driver.name
  });
}
