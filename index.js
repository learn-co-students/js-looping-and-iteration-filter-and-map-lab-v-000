// Code your solution here:
function driversWithRevenueOver(drivers, min) {
  return drivers.filter(function (driver) { return driver.revenue > min})
}

function driverNamesWithRevenueOver(drivers, min) {
  return driversWithRevenueOver(drivers, min).map(function (driver){
    return driver.name
  })
}

function exactMatch(drivers, match) {
  return drivers.filter(function (driver) {return driver[Object.keys(match)] === match[Object.keys(match)]})
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(function (driver) {
    return driver.name
  })
}
