// Code your solution here:
function driversWithRevenueOver(drivers, benchmark) {
  return drivers.filter(function(driver) {
    return driver.revenue > benchmark;
  });
}

function driverNamesWithRevenueOver(drivers, benchmark) {
  return driversWithRevenueOver(drivers, benchmark).map(function(driver) {
    return driver.name;
  });
}


function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(object)[0]] === Object.values(object)[0];
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver) {
    return driver.name;
  });
}
