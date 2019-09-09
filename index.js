// Code your solution here:
function driversWithRevenueOver(driver, rev) {
  return driver.filter(function(element) {return element.revenue > rev})
}

function driverNamesWithRevenueOver(driver, rev) {
  newDriver = driversWithRevenueOver(driver, rev)
  return newDriver.map(function(element) {return element.name})
}

function exactMatch(driver, object) {
  let key = Object.keys(object)[0];
  return driver.filter(function(element) {return element[key] === object[key]})
}

function exactMatchToList(driver, object) {
  list = exactMatch(driver, object)
  return list.map(function(element) {return element.name})
}
