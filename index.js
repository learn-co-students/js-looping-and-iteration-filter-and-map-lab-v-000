// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driverObj) {
    return driverObj.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driverObj) {
    return driverObj.name
  })
}

function exactMatch(drivers, driverObj) {
  return drivers.filter(function(driver) {
    let match = false;

    for (const element in driverObj) {
      match = driver[element] === driverObj[element];
    }
    return match;
  })
}

function exactMatchToList(drivers, driverObj) {
  return exactMatch(drivers, driverObj).map(function(driver) {
    return driver.name;
  })
}
