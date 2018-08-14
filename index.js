// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attributeValuePair) {
  return drivers.filter(function (driver) {
    let match = false;
    for (const key in attributeValuePair) {
      match = driver[key] === attributeValuePair[key];
    }
    return match;
  });
}

function exactMatchToList(drivers, attributeValuePair) {
  return exactMatch(drivers, attributeValuePair).map(function (driver) {
    return driver.name;
  });
}
