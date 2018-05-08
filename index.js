function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  }).map( function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, criteria) {
  return drivers.filter( function (driver) {
    return driver[Object.keys(criteria)[0]] === Object.values(criteria)[0];
  });
}

function exactMatchToList(drivers, criteria) {
  return drivers.filter( function (driver) {
    return driver[Object.keys(criteria)[0]] === Object.values(criteria)[0];
  }).map (function (driver) {
    return driver.name
  });
}
