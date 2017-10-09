// Code your solution here:
function driversWithRevenueOver(driver,revenue){
  return driver.filter( function (driver) {return driver.revenue > revenue} )
}

function driverNamesWithRevenueOver(driver,revenue){
  return driver.filter( function (driver) {return driver.revenue > revenue}).map(function (driver) {return driver.name})
}

function exactMatch(drivers,obj){
  return drivers.filter( function (driver) { return driver[`${Object.keys(obj)}`] === obj[`${Object.keys(obj)}`]} )
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers,obj).map(function(driver){return driver.name})
}
