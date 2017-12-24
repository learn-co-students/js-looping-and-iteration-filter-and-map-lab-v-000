function driversWithRevenueOver (drivers, revenue) {
   return drivers.filter(function (driver) { return driver.revenue > revenue});
}

function driverNamesWithRevenueOver (drivers, revenue) {
  const allDrivers = driversWithRevenueOver (drivers, revenue);
  return allDrivers.map( function (driver) { return driver.name; });
}

function exactMatch (drivers, object) {
  return drivers.filter(function (driver) {
    return object.name === driver.name || object.revenue === driver.revenue
  });
}

function exactMatchToList (drivers, object) {
  const listDrivers = exactMatch (drivers, object);
  return listDrivers.map(function (driver) {return driver.name;});
}
