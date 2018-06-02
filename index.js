// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  filteredDrivers = driversWithRevenueOver(drivers, revenue);

  return filteredDrivers.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(attribute)[0]] === Object.values(attribute)[0];
  });
}

function exactMatchToList(drivers, attribute) {
  filteredDrivers = exactMatch(drivers, attribute);

  return filteredDrivers.map(function(driver) {
    return driver.name;
  });

}
