function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver){
    return driver.name;
  })
}

function exactMatch(drivers, attribute) {
  for (const key in attribute) {
    return drivers.filter(function (driver){
      return driver[key] === attribute[key];
    })
  }
}

function exactMatchToList(extendedDrivers, attr) {
  return exactMatch(extendedDrivers, attr).map(function (driver) {
     return driver.name;
  });
}
