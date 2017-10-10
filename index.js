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

function exactMatch(drivers, object1) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in object1) {
      matches = driver[key] === object1[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver) {
    return driver.name
  });
}
