// Code your solution here:
function driversWithRevenueOver(list, rev){
  return list.filter(function (driver) {
    if (driver.revenue > rev) {
      return driver;
    }
  });
}

function driverNamesWithRevenueOver(list, rev){
  return driversWithRevenueOver(list, rev)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
