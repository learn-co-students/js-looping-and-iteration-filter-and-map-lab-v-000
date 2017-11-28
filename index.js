// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, leMatch) {
  return drivers.filter(function (driver) {
    let match = false;
    
    for (const key in leMatch) {
      match = driver[key] === leMatch[key]
    }
    
    return match;
  });
}

function exactMatchToList(drivers, leMatch) {
  return exactMatch(drivers, leMatch).map(function (driver){
    return driver.name;
  });
  
}