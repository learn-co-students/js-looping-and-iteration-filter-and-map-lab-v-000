// Code your solution here:
function driversWithRevenueOver (driver, revenue) {
  return driver.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver (driver, revenue) {
  return driversWithRevenueOver (driver, revenue)
  .map(function (driver) {
    return driver.name;
  })
}

function exactMatch (driver, match) {
  return driver.filter(function (driver) {
    for (const key in match) {
      return driver[key] === match[key];
    }
  })
}

function exactMatchToList (driver, match) {
  return exactMatch (driver, match)
  .map(function (driver) {
    return driver.name;
  })
}
