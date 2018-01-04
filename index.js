function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue); 
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, revenue) {
  return drivers.filter(function(driver) {
    let matches = false;

    for (const key in revenue) {
      matches = driver[key] === revenue[key];
    }
    return matches; 
  })
}

function exactMatchToList(drivers, revenue) {
  return exactMatch(drivers, revenue).map(function (driver) {
    return driver.name;
  });
}