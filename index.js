// Code your solution here:
function driversWithRevenueOver(drivers,revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue >= revenue })

  }

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers,revenue)
    .map(function (driver) {
      return driver.name
    })
}

function exactMatch(drivers, array) {
  return drivers.filter(function (driver) {
    let matches = false;

      for (const key in array) {
        matches = driver[key] === array[key];
      }

      return matches;
    })
}

function exactMatchToList(drivers, array) {
  return exactMatch(drivers, array)
  .map(function (driver) {
    return driver.name
  })
}
