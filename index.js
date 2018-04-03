// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function cb(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function cb(driver) {
    return driver.revenue > revenue;
  }).map(function cb(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function cb(driver) {
    return driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]];
  });
}

function exactMatchToList(drivers, obj) {
  return drivers.filter(function cb(driver) {
    return driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]];
  }).map(function cb(driver) {
    return driver.name;
  });
}