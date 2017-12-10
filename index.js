// returns all matching drivers whose revenue is greater than minimum revenue
function driversWithRevenueOver (drivers, minRevenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > minRevenue
  });
}

// returns an array of all matching driver names whose revenue is greater than min revenue
function driverNamesWithRevenueOver(drivers, minRevenue) {
  return driversWithRevenueOver(drivers, minRevenue).map(function(driver){
    return driver.name;
  });
}

// returns an array of all matching drivers
function exactMatch(extendedDrivers, attribute) {
  return extendedDrivers.filter(function (driver) {
    return driver.name === attribute.name || driver.revenue == attribute.revenue;
  });
}

// returns an array of names for all matching drivers
function exactMatchToList(extendedDrivers, attribute) {
  return exactMatch(extendedDrivers, attribute).map(function(driver){
    return driver.name;
  });
}
