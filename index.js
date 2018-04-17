// Code your solution here:
function driversWithRevenueOver(name, num){
  return name.filter(function(driver){
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(name, num){
  return driversWithRevenueOver(name, num).map(function(driver){
    return driver.name;
  });
}

function exactMatch(name, num){
  return name.filter(function(driver){
    for(const value in num){
      return driver[value] === num[value];
    }
  });
}

function exactMatchToList(name, num){
  return exactMatch(name, num).map(function(driver){
    return driver.name;
  });
}
