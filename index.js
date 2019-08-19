// Code your solution here:

function driversWithRevenueOver(drivers, rate) {
  let driversOverRate = drivers.filter((driver) => driver.revenue >= rate);
  return driversOverRate;
}

function driverNamesWithRevenueOver(drivers,rate){
  const findDrivers = driversWithRevenueOver(drivers, rate);
  const namesOver = findDrivers.map(function(driver) {return driver.name});
  return namesOver;
}

function exactMatch(drivers, property) {
  const findDrivers = drivers.filter((driver) => driver.name === property.name || driver.revenue === property.revenue);
  return findDrivers;
}

function exactMatchToList(drivers, property) {
  const matches = exactMatch(drivers, property).map(function(driver) {return driver.name});
  return matches;
}
