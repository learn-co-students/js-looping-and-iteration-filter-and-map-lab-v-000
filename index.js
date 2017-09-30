function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
  .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, name) {
  return drivers.filter(function(driver) {
    let matches = false;

     for (const key in name) {
       matches = driver[key] === name[key];
     }

     return matches;
   });
 }

function exactMatchToList(drivers, name) {
  return exactMatch(drivers, name)
  .map(function (driver) {
    return driver.name;
  });
}
