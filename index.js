// Code your solution here:

function driversWithRevenueOver (drivers, revenue) {
   return drivers.filter(function (driver) { return driver.revenue > revenue});
}

function driverNamesWithRevenueOver (drivers, revenue) {
  const allDrivers = driversWithRevenueOver (drivers, revenue);
  return allDrivers.map( function (driver) { return driver.name; });
}

function exactMatch (drivers, object) {
  return drivers.filter(function (driver) {
    if (object.name && object.name === driver.name) {
      return driver;
    } else if (object.revenue && object.revenue === driver.revenue) {
      return driver;
    }
  });
}

function exactMatchToList (drivers, object) {
  const listDrivers = exactMatch (drivers, object);
  return listDrivers.map(function (driver) {return driver.name;});
}
