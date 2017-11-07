function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function functionName(driver) { return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driversWithRevenueOver = drivers.filter(function functionName(driver) { return driver.revenue > revenue });
  return driversWithRevenueOver.map(function functionName(driver) {return driver.name});
}

function exactMatch(drivers, attributes) {
  return drivers.filter(function (driver) {
    return driver[Object.keys(attributes)[0]] === Object.values(attributes)[0]});
}

function exactMatchToList(drivers, attributes) {
  const exactMatch = drivers.filter(function (driver) { return driver[Object.keys(attributes)[0]] === Object.values(attributes)[0]});
  return exactMatch.map(function (driver) { return driver.name})
}
