function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue; });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const selectDrivers = driversWithRevenueOver(drivers, revenue);
  return selectDrivers.map(function (driver) {return driver.name; });
}

function exactMatch(drivers, attributeAndValue) {
  
  const attribute = Object.keys(attributeAndValue)[0];
  const value = Object.values(attributeAndValue)[0];
  
  return drivers.filter( function (driver) {return driver[attribute] === value; });
}

function exactMatchToList(drivers, attributeAndValue) {
  const selectDrivers = exactMatch(drivers, attributeAndValue);
  
  return selectDrivers.map(function (driver) {return driver.name; });
}
