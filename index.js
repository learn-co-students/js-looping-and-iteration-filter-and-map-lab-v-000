function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
};

function driverNamesWithRevenueOver (drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map( function (driver) {
    return driver.name;
  });
};

function exactMatch (drivers, condition) {
  return drivers.filter(driver => driver.name === condition.name || driver.revenue === condition.revenue);
};

function exactMatchToList (drivers, condition) {
  return drivers.filter(driver => driver.name === condition.name || driver.revenue === condition.revenue).map ( function (driver) {
    return driver.name;
  });
};
