// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter( function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver (drivers, revenue )
    .map (function (driver) {
      return driver.name;
    });
}

function exactMatch (drivers, criteria) {
  const key = Object.keys(criteria)[0];
  return drivers.filter( function (driver) {
    return driver[key] === criteria[key];
  });
}

function exactMatchToList (drivers, criteria) {
  return exactMatch (drivers, criteria)
  .map( function (driver) {
    return driver.name;
  });
}
