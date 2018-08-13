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

function exactMatch (drivers, attributeObject) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in attributeObject) {
      matches = driver[key] === attributeObject[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, attributeObject) {
  return exactMatch(drivers, attributeObject)
    .map(function (driver) {
      return driver.name;
    });
}
