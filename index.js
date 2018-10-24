function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
};

function exactMatch(drivers, toMatch) {
  return drivers.filter(driver => driver[Object.keys(toMatch)] === toMatch[Object.keys(toMatch)])
};

function exactMatchToList(drivers, toMatch) {
  return exactMatch(drivers, toMatch).map(driver => driver.name)
};
