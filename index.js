// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function(driver){
      return driver.name;
  });
}

function exactMatch(drivers, keyValue) {
  return drivers.filter(function(driver) {
    let match = false;
    for (const key in keyValue) {
      match = driver[key] === keyValue[key];
    }
    return match;
  });
}

function exactMatchToList(drivers, keyValue) {
  return exactMatch(drivers, keyValue)
    .map(function(driver) {
      return driver.name;
  })
}
