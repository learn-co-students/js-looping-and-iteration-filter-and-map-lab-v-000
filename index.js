function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver (drivers, revenue) {
  const newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(driver => driver.name);
}

function exactMatch (drivers, obj) {
  const objKey = Object.keys(obj)[0];
  return drivers.filter(driver => driver[objKey] === obj[objKey]);
}

function exactMatchToList (drivers, obj) {
  const exactDrivers = exactMatch(drivers, obj);
  return exactDrivers.map(driver => driver.name);
}
