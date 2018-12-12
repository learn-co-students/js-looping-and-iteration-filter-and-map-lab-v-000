// Code your solution here:
function driversWithRevenueOver(drivers, cash) {
  let richDrivers = []
  drivers.filter(function(driver) {
    if (driver.revenue > cash) {
      richDrivers.push(driver)
    }
  })
  return richDrivers
}

function driverNamesWithRevenueOver(drivers, cash) {
  let richDrivers = []
  drivers.filter(function(driver) {
    if (driver.revenue > cash) {
      richDrivers.push(driver.name)
    }
  })
  return richDrivers
}

function exactMatch(drivers, searchObject) {
  let matchedDrivers = []
  let key = Object.keys(searchObject).toString()
  drivers.filter(function(driver){
    debugger
    if (driver[key] === searchObject[key]){
      matchedDrivers.push(driver)
    }
  })
  return matchedDrivers
}

function exactMatchToList(drivers, searchObject) {
  return exactMatch(drivers, searchObject).map(function(driver){
    return driver.name
  })
}
