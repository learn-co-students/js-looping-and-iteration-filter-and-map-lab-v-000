function driversWithRevenueOver(drivers, number) {
  return drivers.filter(function(driver) {
    return driver.revenue > number
  })
}

function driverNamesWithRevenueOver(drivers, number) {
  newArray = driversWithRevenueOver(drivers, number)
  return newArray.map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(object)[0]] === object[Object.keys(object)[0]]
  })
}

function exactMatchToList(drivers, object) {
  newArray = exactMatch(drivers, object)
  return newArray.map(function(driver) {
    return driver.name
  })
}
