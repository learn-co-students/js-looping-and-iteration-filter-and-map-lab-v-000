// Code your solution here:

function driversWithRevenueOver(drivers,revenue) {
  return drivers.filter(function(driver){ return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers,revenue) {
  return driversWithRevenueOver(drivers,revenue).map(function(driverObject) {return driverObject.name;});
  //return drivers.filter(function(driver){ return driver.revenue > revenue;}).map(function(driverObject) {return driverObject.name;});
}

function exactMatch(drivers,object) {
  return drivers.filter(function(driver){ return driver.revenue === object.revenue || driver.name === object.name;});
}

function exactMatchToList(drivers,object) {
  return exactMatch(drivers,object).map(function(driverObject) {return driverObject.name;});
  //return drivers.filter(function(driver){ return driver.revenue === object.revenue || driver.name === object.name;}).map(function(driverObject) {return driverObject.name;});
}
