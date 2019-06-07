// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver){
    return driver.name;
  });
}

function exactMatch(drivers, attrs) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in attrs) {
      matches = driver[key] === attrs[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, attrs) {
  return exactMatch(drivers, attrs).map(function (driver) {
    return driver.name;
  });
} 
