// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(drv){
    return drv.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function(drv){
    return drv.name
  })
}

function exactMatch (drivers, obj) {
  return drivers.filter(function (driver) {
    let match = false;
    for (const key in obj) {
      matches = driver[key] === obj[key] ? true : false;
    }
    return matches;
  });
}

function exactMatchToList (drivers, obj) {
  return exactMatch(drivers, obj)
    .map(function (driver) {
      return driver.name;
    });
}
