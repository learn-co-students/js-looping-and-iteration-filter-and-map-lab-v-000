// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}


function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}


function exactMatch(drivers, cValue){
  return drivers.filter(function(driver){
    let match = false;

    for(const key in cValue){
      match = driver[key] === cValue[key];
    }

    return match;
  });
}

function exactMatchToList (drivers, cValue) {
  return exactMatch(drivers, cValue)
    .map(function (driver) {
      return driver.name;
    });
}
