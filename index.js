// Code your solution here:

function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;} );
}

function driverNamesWithRevenueOver (drivers, revenue) {
  const filteredDrivers = driversWithRevenueOver(drivers, revenue);
  return filteredDrivers.map(function (driver) {return driver.name;} );
}

function exactMatch (drivers, attribute) {
  return drivers.filter(function (driver) {for (const key in attribute) {return driver[key] === attribute[key];}} );
}

function exactMatchToList (drivers, attribute) {
  const filteredDrivers = exactMatch(drivers, attribute);
  return filteredDrivers.map(function (driver) {return driver.name;} );
}
