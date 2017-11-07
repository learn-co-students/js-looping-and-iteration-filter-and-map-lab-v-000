function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function functionName(driver) { return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
  .map(function functionName(driver) {return driver.name});
}

function exactMatch(drivers, attributes) {
  return drivers.filter(function (driver) {
    return driver[Object.keys(attributes)[0]] === Object.values(attributes)[0]});
}

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes)
  .map(function (driver) { return driver.name})
}
