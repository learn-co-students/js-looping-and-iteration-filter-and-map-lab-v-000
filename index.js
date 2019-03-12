// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
    });
  }

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) { return driver.name; });
}


function exactMatch(extendedDrivers, attributes) {
  return extendedDrivers.filter(function (driver) {
    for (const key in attributes) {
       match = driver[key] === attributes[key];
    }
    return match;
  });
}

function exactMatchToList(extendedDrivers, attributes) {
  return exactMatch(extendedDrivers, attributes).map(function(driver) {
    return driver.name;
  });
}
