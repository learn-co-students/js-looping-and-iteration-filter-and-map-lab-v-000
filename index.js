// Code your solution here:
function driversWithRevenueOver (driverArray, revenue) {
  return driverArray.filter(function (driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver (driverArray, revenue) {
  return driversWithRevenueOver(driverArray, revenue).map(function (driver) {
    return driver.name;
  });
};

function exactMatch (driverArray, object) {
  return driverArray.filter(function (driver) {
    let matches = false;
    for (const key in object) {
      matches = driver[key] === object[key];
    };
    return matches;
  });
};

function exactMatchToList (driverArray, object) {
  return exactMatch(driverArray, object).map(function (driver) {
    return driver.name;
  });
};
