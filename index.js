// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  bigMoneyDrivers = driversWithRevenueOver(drivers, revenue);
  return bigMoneyDrivers.map(function(driver) {return driver.name});
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (driver) {
    let matches = false;
  
    for (const key in obj) {
      matches = driver[key] === obj[key];
    }
    return matches;
  });
}
function exactMatchToList(drivers, obj) {
  array = exactMatch(drivers, obj);
  
  return array.map(function(driver) {
    return driver.name;
  })
}