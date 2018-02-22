// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(function(driver) {
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map(function(driver) {
    return driver.name
  });
}

function exactMatch(drivers, item) {
  return drivers.filter(function(driver){
    return driver[Object.keys(item)[0]] === Object.values(item)[0]
  });
}

function exactMatchToList(drivers, item) {
  return exactMatch(drivers, item).map(function(driver) {
    return driver.name
  });
}
