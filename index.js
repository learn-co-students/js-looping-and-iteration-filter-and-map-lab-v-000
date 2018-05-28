function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, driverHash) {
  return drivers.filter(driver => {
    const key = Object.keys(driverHash)[0]
    const value = driverHash[key]
    return driver[key] === value
  })
}

function exactMatchToList(drivers, driverHash) {
  return exactMatch(drivers, driverHash).map(driver => driver.name)
}
