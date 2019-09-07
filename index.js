function driversWithRevenueOver(drivers, amount){
  return drivers.filter(function(driver) {
    return driver.revenue > amount;
  });
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, attr) {
  return drivers.filter(function(driver) {
    let match = false;

    for (const key in attr) {
      match = driver[key] === attr[key];
    }
    return match;
  });
}

function exactMatchToList(drivers, attr){
  return exactMatch(drivers, attr).map(function(driver){
    return driver.name;
  });
}
