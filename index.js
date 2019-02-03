function driversWithRevenueOver(drivers, amt) {
  return drivers.filter(driver => driver.revenue > amt)
}

function driverNamesWithRevenueOver(drivers, amt) {
  const newDrivers = driversWithRevenueOver(drivers, amt)
  const newDriversNames = []
  newDrivers.map(driver => newDriversNames.push(driver.name))
  return newDriversNames
}

function exactMatch(drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false

    for (const key in matcher) {
      matches = driver[key] === matcher[key]
    }

    return matches
  })
}

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher).map(function (driver) {
    return driver.name
  })
}
