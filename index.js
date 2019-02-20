// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(function (driver){
    return driver.name;
  });
}

function exactMatch(driver, matcher){
  return driver.filter(function(driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }
    return matches
  });
}

function exactMatchToList(driver, matcher){
  return exactMatch(driver, matcher).map(function (driver){
    return driver.name;
  });
}
