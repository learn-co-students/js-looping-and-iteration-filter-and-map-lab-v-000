// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue; });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, obj) {
  let value;
  let keyOuter;
    for (const key in obj) {
         value = obj[key];
         keyOuter = key;
    }
  return drivers.filter(function(driver) {
    return driver[keyOuter] === value;
    });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (driver) {
      return driver.name;
    });
}
  
