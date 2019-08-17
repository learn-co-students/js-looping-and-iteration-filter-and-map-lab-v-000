// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const filteredDrivers = driversWithRevenueOver(drivers, revenue);
  return filteredDrivers.map(function(driver) { return driver.name });
}

function exactMatch(drivers, query) {
  return drivers.filter(function(driver) {
    for (const key in query) {
      return driver[key] === query[key];
    };
  });
}

function exactMatchToList(drivers, query) {
  const matchedDrivers = exactMatch(drivers, query);
  return matchedDrivers.map(function(driver) { return driver.name });
}
