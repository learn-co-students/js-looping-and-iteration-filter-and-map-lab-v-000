// Code your solution here:


function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const richDrivers = driversWithRevenueOver(drivers, revenue);
  const driverNames = richDrivers.map(function(driver) {
    return driver.name;
  });
  return driverNames;
}

function exactMatch(drivers, attVal) {
  return drivers.filter(function(driver) {
    let matches = false;
    for (const key in attVal) {
      matches = driver[key] === attVal[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, attVal) {
  const matchingDrivers = exactMatch(drivers, attVal);
  const driverNames = matchingDrivers.map(function(driver) {
    return driver.name;
  });
  return driverNames;
}
