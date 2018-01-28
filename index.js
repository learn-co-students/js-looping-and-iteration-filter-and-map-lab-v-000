function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(driver => driver.name);
}

function exactMatch(drivers, object) {
  return drivers.filter(driver => driver.name === object.name || driver.revenue === object.revenue);
}

function exactMatchToList(drivers, object) {
  newDrivers = exactMatch(drivers, object);
  return newDrivers.map(driver => driver.name);
}
