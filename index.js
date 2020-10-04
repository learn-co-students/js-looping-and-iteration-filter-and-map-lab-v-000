function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const matchingDrivers = driversWithRevenueOver(drivers, revenue);
    return matchingDrivers.map(driver => driver.name);
}

function exactMatch(drivers, attribute) {
  const matchingDrivers = drivers.filter(function(driver) {
    for (const key in attribute) {
      return driver[key] === attribute[key];
    }
  });
  return matchingDrivers;
}

function exactMatchToList(drivers, attribute) {
  const driverNames = exactMatch(drivers, attribute).map(driver => driver.name);
  return driverNames;
}