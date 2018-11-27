// Code your solution here:
//

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) { return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  goodDrivers = drivers.filter (function (driver) { return driver.revenue > revenue });
  return goodDrivers.map(function (driver) { return driver.name });
}

function exactMatch(drivers, attribute) {
  const key = Object.keys(attribute)[0];
  return drivers.filter(function (driver) { return driver[key] === attribute[key] });
}


function exactMatchToList(drivers, attribute) {
  const key = Object.keys(attribute)[0];
  let matchedDrivers = drivers.filter(function (driver) { return driver[key] === attribute[key] });
  return matchedDrivers.map(function (driver) { return driver.name });
}


