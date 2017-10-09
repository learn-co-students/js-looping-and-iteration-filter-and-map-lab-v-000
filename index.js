// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { if (driver.revenue > revenue) {return driver} })
}

function driverNamesWithRevenueOver(drivers, revenue) {
let eachDriver = drivers.filter(function(driver) {if (driver.revenue > revenue) {return driver.name}})
  return eachDriver.map(function(driver){return driver.name})
  }


function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {if (driver[Object.keys(attribute)] === attribute[Object.keys(attribute)]) {return driver}})
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver) {return driver.name})
  }