function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = drivers.filter(driver => driver.revenue > revenue)
  return newDrivers.map(newDriver => newDriver.name)
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(object)[0]] === Object.values(object)[0]
  })
}

function exactMatchToList(drivers, object) {
  const list = exactMatch(drivers, object)
    return list.map(function(driver) {
      return driver.name
    })
}
