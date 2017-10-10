// Code your solution here:

function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  }).map(function (filteredDriver) {
    return filteredDriver.name;
  });
}

function exactMatch (drivers, object) {
  return drivers.filter(function (driver) {
    return object[Object.keys(object)[0]] === driver[Object.keys(object)[0]];
  });
}

function exactMatchToList (drivers, object) {
  return drivers.filter(function (driver) {
    return object[Object.keys(object)[0]] === driver[Object.keys(object)[0]];
  }).map(function (filteredDriver) {
    return filteredDriver.name;
  });
}
