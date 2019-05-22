// Code your solution here:
function driversWithRevenueOver(drivers, targetRevenue) {
  return drivers.filter(function (driver) {return driver.revenue > targetRevenue});
}

function driverNamesWithRevenueOver(drivers, targetRevenue) {
  driversWithRev = drivers.filter(function (driver) {return driver.revenue > targetRevenue});
  return driversWithRev.map(function (driver) {return driver.name});
}

function exactMatch(drivers, condition) {
  return drivers.filter(function (driver) {
    const key = Object.keys(condition)[0];

    return driver[key] === condition[key];
  });
}

function exactMatchToList(drivers, condition) {
  const matchingDrivers = drivers.filter(function (driver) {
    const key = Object.keys(condition)[0];

    return driver[key] === condition[key];
  });

  return matchingDrivers.map(function (driver) {return driver.name});
}
