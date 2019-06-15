// Code your solution here:

function driversWithRevenueOver(drivers, value) {
  return drivers.filter( function (driver) { return driver.revenue > value })
}

function driverNamesWithRevenueOver(drivers, value) {
  return driversWithRevenueOver(drivers,value).map( function (driver) {return driver.name})
}

function exactMatch( drivers, attr) {
  const key = Object.keys(attr)[0]
  const val = Object.values(attr)[0]
 return drivers.filter( function (driver) { return driver[key] == val})
}


function exactMatchToList(drivers, attr) {
  return exactMatch(drivers, attr).map( function (driver) { return driver.name})
}
