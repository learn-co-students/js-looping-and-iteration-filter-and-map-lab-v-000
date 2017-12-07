// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver.revenue > revenue }).map(function(driver) {return driver.name});
}

function exactMatch(drivers, object) {
  const objectKey = Object.keys(object);
  const objectValue = Object.values(object)[0];

  return drivers.filter(function(driver) { return driver[objectKey] === objectValue });
}

function exactMatchToList(drivers, object) {
  const objectKey = Object.keys(object);
  const objectValue = Object.values(object)[0];

  return drivers.filter(function(driver) { return driver[objectKey] === objectValue }).map(function(driver) {return driver.name});
}
