// Code your solution here:

function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) { return driver.revenue > revenue; });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  const filteredDrivers = driversWithRevenueOver(drivers, revenue);
  return filteredDrivers.map(function (driver) { return driver.name; });
}

function exactMatch (drivers, attribute) {
  const key = Object.keys(attribute);
  const value = attribute[key];
  return drivers.filter(function (driver) { return driver[key] === value; });
}

function exactMatchToList (drivers, attribute) {
  const filteredDrivers = exactMatch(drivers, attribute);
  return filteredDrivers.map(function (driver) { return driver.name });
}
