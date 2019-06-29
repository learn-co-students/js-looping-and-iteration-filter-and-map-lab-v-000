// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function(driver){
    return driver.revenue > rev;
  })
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(function(driver){
    return driver.name;
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver){
    for (const key in obj) {
      return driver[key] === obj[key];
    };
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name;
  })
}
