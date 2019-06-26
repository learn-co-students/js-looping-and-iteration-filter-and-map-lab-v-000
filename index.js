function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter (function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver (drivers, revenue).map(function (driver){
    return driver.name;
  });
}

function exactMatch (drivers, matches) {
  return drivers.filter (function (driver) {
    let driverMatch = false;

    for (const key in matches) {
      driverMatch = driver[key] === matches [key];
    }

    return driverMatch;
  });
}

function exactMatchToList (drivers, matches) {
  return exactMatch (drivers, matches).map(function (driver){
    return driver.name;
  });
}
