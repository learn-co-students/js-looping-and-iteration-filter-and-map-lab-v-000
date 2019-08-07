// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter( function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return drivers.filter( function (driver) {
    return driver.revenue > revenue;
  }).map(function (driver) {
    return driver.name;
  });
}

function exactMatch (drivers, criteria) {
  return drivers.filter( function (driver) {
    const key = Object.keys(criteria)[0];
    return driver[key] === criteria[key];
  });
}

function exactMatchToList (drivers, criteria) {
  return drivers.filter( function (driver) {
    const key = Object.keys(criteria)[0];
    return driver[key] === criteria[key];
  }).map( function (driver) {
    return driver.name;
  });
}
