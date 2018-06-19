// Code your solution here:

function driversWithRevenueOver(drivers, amt) {
  return drivers.filter(function (driver) {
    return driver.revenue > amt;
  });
}

function driverNamesWithRevenueOver(drivers, amt) {
  return driversWithRevenueOver(drivers, amt).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, criterion) {
  return drivers.filter(function (driver) {
    const key = Object.keys(criterion)[0];
    return driver[key] === criterion[key]
  });
}

function exactMatchToList(drivers, criterion) {
  return exactMatch(drivers, criterion).map(function (driver) {
    return driver.name;
  });
}
