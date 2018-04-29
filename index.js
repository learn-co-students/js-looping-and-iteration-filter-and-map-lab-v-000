// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  }).map(function (driver) {
    return driver.name;
  });
}

function exactMatch (drivers, attr) {
  return drivers.filter(function (driver) {
    return driver[Object.keys(attr)[0]] === attr[Object.keys(attr)[0]];
  });
}

function exactMatchToList (drivers, attr) {
  return drivers.filter(function (driver) {
    return driver[Object.keys(attr)[0]] === attr[Object.keys(attr)[0]]
  }).map(function (driver) {
    return driver.name;
  });
}
