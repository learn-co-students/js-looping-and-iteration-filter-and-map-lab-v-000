function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, matchAttribute) {
  return drivers.filter(function (driver) {
    for (const keys in matchAttribute) {
      match = driver[keys] === matchAttribute[keys];
    }
  return match;
  });
}

function exactMatchToList (drivers, matchAttribute) {
  return exactMatch(drivers, matchAttribute)
    .map(function (driver) {
      return driver.name;
    })
}
