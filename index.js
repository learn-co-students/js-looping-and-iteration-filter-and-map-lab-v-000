// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  // debugger
  matching = driversWithRevenueOver(drivers, revenue)
  names = matching.map(function (driver) {
    return driver.name
  })
  return names
}

function exactMatch(drivers, keyVal) {
  return drivers.filter(function(driver) {
    // debugger
    return driver[Object.keys(keyVal)[0]] === Object.values(keyVal)[0]
  })
}

function exactMatchToList(drivers, keyVal) {
  matching = exactMatch(drivers, keyVal)
  names = matching.map(function (driver) {
    return driver.name
  })
  return names
}
