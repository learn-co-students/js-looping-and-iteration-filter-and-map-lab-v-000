// Code your solution here:
function driversWithRevenueOver(drivers, number) {
  return drivers.filter(function (driver) { return driver.revenue > number})
};

function driverNamesWithRevenueOver(drivers, number) {
  const newDrivers = driversWithRevenueOver(drivers, number);
  return newDrivers.map(function (driver) {return `${driver.name}`})
}

function exactMatch(extendedDrivers, secondDriver) {

  return extendedDrivers.filter(function (driver) { return driver.name === secondDriver.name || driver.revenue === secondDriver.revenue })
}

function exactMatchToList(extendedDrivers, secondDriver) {
  const matchDrivers = exactMatch(extendedDrivers, secondDriver);
  return matchDrivers.map(function (driver) { return driver.name })
}
