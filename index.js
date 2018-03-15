function driversWithRevenueOver(driverArray, revenue) {
  return driverArray.filter(function (driver) {
    return driver.revenue > parseInt(revenue);
  });
}

function driverNamesWithRevenueOver(driverArray, revenue) {
  let driverNames = []
  driverArray.filter(function (driver) {
    if (driver.revenue > parseInt(revenue)) {
      driverNames.push(driver.name);
    }
  });
  return driverNames;
}

// function driverNamesWithRevenueOver (drivers, revenue) {
//   return driversWithRevenueOver(drivers, revenue)
//     .map(function (driver) {
//       return driver.name;
//     });
// }

function exactMatch(driverArray, keyValuePairObj) {
  let matches = []
  driverArray.filter(function (driver) {
    for (const key in driver) {
      if (driver[key] === keyValuePairObj[key]) {
        matches.push(driver);
      }
    }
  });
  return matches;
}

// function exactMatch (drivers, matcher) {
//   return drivers.filter(function (driver) {
//     let matches = false;

//     for (const key in matcher) {
//       matches = driver[key] === matcher[key];
//     }

//     return matches;
//   });
// }

function exactMatchToList (driverArray, keyValuePairObj) {
  return exactMatch(driverArray, keyValuePairObj).map(function (driver) {
    return driver.name;
  });
}
