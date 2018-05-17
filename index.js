// Code your solution here:
function driversWithRevenueOver(drivers, max){
  return drivers.filter(function (driver){
    return driver.revenue > max;
  })
}
function driverNamesWithRevenueOver(drivers, max){
  return driversWithRevenueOver(drivers,max).map(function(driver){
    return driver.name;
  })
}
function exactMatch(drivers, matchingAttribute){
  return drivers.filter(function(driver){
    const matchingKeys = Object.keys(matchingAttribute);
    return driver[matchingKeys]=== matchingAttribute[matchingKeys];
  })
}
function exactMatchToList(drivers, matchingAttribute){
  return exactMatch(drivers, matchingAttribute).map(function(driver){
    return driver.name;
  })
}
