// Code your solution here:
function driversWithRevenueOver(drivers, limit) {
  return drivers.filter(function (driver) {
    return driver.revenue > limit;
  });
}

function driverNamesWithRevenueOver(drivers, limit) {
  return driversWithRevenueOver(drivers, limit).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, name) {
  return drivers.filter(function (driver) {
      let matches = false;
      for (const key in name) {
        matches = driver[key] === name[key];
      }
      return matches;
    });
}


function exactMatchToList(drivers, name) {
  return exactMatch(drivers, name).map(function (driver) {
    return driver.name;
  });
}
