// Code your solution here:

function driversWithRevenueOver(array, revenue) {
  return array.filter( function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue)
    .map(function (driver) {
      return driver.name;
  })
}

function exactMatch(array, match) {
  return array.filter(function (driver) {
    for (const key in match) {
      return driver[key] === match[key];
    }
  })
}

function exactMatchToList(array, match) {
  return exactMatch(array, match)
  .map(function (driver) {
    return driver.name;
  })
}
