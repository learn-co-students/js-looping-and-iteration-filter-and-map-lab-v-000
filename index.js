function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const selectedDrivers = driversWithRevenueOver(drivers, revenue);
  return selectedDrivers.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    for (const key in attribute)
    return driver[key] === attribute[key];
  });
}

function exactMatchToList(drivers, attribute) {
  const selectedDrivers = exactMatch(drivers, attribute);
  return selectedDrivers.map(function(driver) {
    return driver.name;
  });
}
