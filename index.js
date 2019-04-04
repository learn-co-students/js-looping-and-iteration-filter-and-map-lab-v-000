function driversWithRevenueOver(drivers, revenue) {
  const filteredDrivers = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
  return filteredDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const filteredNames = driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name
  });
  return filteredNames;
}

function exactMatch(drivers, obj) {
  const key = Object.keys(obj);
  const filteredDrivers = drivers.filter(function(driver) {
    return driver[key] === obj[key];
  });
  return filteredDrivers;
}

function exactMatchToList(drivers, obj) {
  const filteredNames = exactMatch(drivers, obj).map(function(driver) {
    return driver.name
  });
  return filteredNames;
}
