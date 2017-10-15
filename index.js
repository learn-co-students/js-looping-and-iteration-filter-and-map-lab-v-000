// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driversResult = [];
  drivers.map(function(driver) {
    if (driver.revenue > revenue) {
      driversResult.push(driver.name)
    }
  })
  return driversResult
}

function exactMatch(drivers, attribute) {
  const key = Object.keys(attribute)
  return drivers.filter(function(driver){
    return driver[key] === attribute[key]
  })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver){
    return driver.name
  })
}
