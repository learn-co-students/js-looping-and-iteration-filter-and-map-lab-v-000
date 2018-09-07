// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(driver) { return driver.revenue > amount; });
}

function driverNamesWithRevenueOver(drivers, amount) {
  return drivers.filter(function(driver) { return driver.revenue > amount; }).
  map(function(driver) { return driver.name; });
}

function exactMatch(drivers, conditionHash) {
  conditionKey = Object.keys(conditionHash)[0];
  conditionValue = conditionHash[conditionKey];
  return drivers.filter(function(driver) { return driver[conditionKey] === conditionValue; });
}

function exactMatchToList(drivers, conditionHash) {
  conditionKey = Object.keys(conditionHash)[0];
  conditionValue = conditionHash[conditionKey];
  return drivers.filter(function(driver) { return driver[conditionKey] === conditionValue; }).
  map(function(driver) { return driver.name; });
}
