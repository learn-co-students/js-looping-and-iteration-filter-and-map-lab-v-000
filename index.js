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

function exactMatch(drivers, object) {
  return drivers.filter(function(driver){
    for (const key in object) {
      return driver[key] === object[key];
    };
  })
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver){
    return driver.name;
  })
}
