// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  const driversList = driversWithRevenueOver (drivers, revenue);
  return driversList.map(function (driver) {
    return driver.name;
  });
}

/*
function driverNamesWithRevenueOver (drivers, revenue) {
  let driversList = drivers.map(function (driver) {
    if (driver.revenue > revenue) {
      return driver.name;
    }
  });
  return driversList;
}
-> using map returns undefined when condition evaluates to false
*/

function exactMatch (drivers, value) {
  return drivers.filter(function (driver) {
    for (const key in driver) {
      if (driver[key] === value[key]){
        return driver
      }
    }
  });
}

function exactMatchToList (drivers, value) {
  const driversMatched = exactMatch (drivers, value);
  return driversMatched.map(function (driver) {
    return driver.name;
  });
}
