// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let filtered = driversWithRevenueOver(drivers, revenue);
  return filtered.map(function(driver) {return driver.name})
}

function exactMatch(drivers, object) {
  let key = Object.keys(object)[0];
  let value = object[key];
  return drivers.filter(function(driver) {return driver[key] === value})
}

function exactMatchToList(drivers, object) {
  let filtered = exactMatch(drivers, object);
  return filtered.map(function(driver) {return driver.name})
}
