function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name
    })
}

function exactMatch(drivers, attributes) {
  return drivers.filter(function (driver) {
    let matches = false;
    for (const key in attributes) {
      matches = driver[key] === attributes[key]
    }
    return matches
  })
}

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes)
    .map(function (driver) {
      return driver.name;
    })
}