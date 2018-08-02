// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( function (driver) { return driver.revenue > revenue} )
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map( function(driver) { return driver.name })
}

function exactMatch(drivers, element) {
  return drivers.filter( function(driver) {
    let match = false;

    for (const key in element) {
      match = driver[key] === element[key];
    }

    return match;
  });
}

function exactMatchToList(drivers, element) {
  return exactMatch(drivers, element).map( function(driver) { return driver.name });
}
