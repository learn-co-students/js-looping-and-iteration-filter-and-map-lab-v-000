function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = driversWithRevenueOver(drivers, revenue)
  return newDrivers.map(function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, attribute) {
  property = Object.keys(attribute)
  const driverMatches = drivers.filter(function (driver){
    return driver[property] === attribute[property]
  })
  return driverMatches
}

function exactMatchToList(drivers, attribute) {
  let driverMatches = exactMatch(drivers, attribute)
  return driverMatches.map(function (driver) {
    return driver.name
  })
}
