// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver) {
    return driver[Object.keys(attribute)]=== Object.values(attribute)[0];
  })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(driver => driver.name)
}
