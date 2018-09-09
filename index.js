function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map( function (driver) {
    return driver.name
  });
};

function exactMatch(drivers, myObj) {
  return drivers.filter(function (driver) {
    return driver.name === myObj.name || driver.revenue === myObj.revenue;
  });
};

function exactMatchToList(drivers, myObj) {
  return exactMatch(drivers, myObj).map( function (driver) {
    return driver.name
  });
};
