function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
  .map(function (driver) {
    return driver.name;
  })
}

function exactMatch (drivers, match) {
  return drivers.filter(function (driver) {
    let isMatch = false;

    for (const key in match) {
      isMatch = driver[key] === match[key];
    }

    return isMatch;
  });
}

function exactMatchToList (drivers, match) {
  return exactMatch(drivers, match)
    .map(function (driver) {
      return driver.name;
    });
}
