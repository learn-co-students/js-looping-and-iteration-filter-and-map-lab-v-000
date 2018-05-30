// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function (driver) {
    return driver.revenue > rev
  })
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(function (driver) {
    return driver.name;
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (driver) {
    let compare = false;
    for (const key in obj) {
      compare = driver[key] === obj[key];
    }
    return compare;
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver) {
    return driver.name
  })
}
