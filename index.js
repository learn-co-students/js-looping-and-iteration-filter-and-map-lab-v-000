// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, driverInfo) {
  return drivers.filter(function(driver){
    for (const key in driver) {
      if (key === Object.keys(driverInfo)[0] && driver[key] === Object.values(driverInfo)[0]) {
        return driver;
      }
    }
  });
}

function exactMatchToList(drivers, driverInfo) {
  return exactMatch(drivers, driverInfo).map(function(driver) {
    return driver.name;
  });
}
