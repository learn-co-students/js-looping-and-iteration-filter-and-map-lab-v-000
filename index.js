function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name);
}

function exactMatch (drivers, object) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in object) {
      matches = driver[key] === object[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(driver => driver.name);
}