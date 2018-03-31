function driversWithRevenueOver(drivers,amt){
  return drivers.filter(function(driver){
    return driver.revenue > amt;
  });
};

function driverNamesWithRevenueOver(drivers,amt){
  return driversWithRevenueOver(drivers,amt).map(function(driver){
    return driver.name;
  });
};

function exactMatch(drivers, match){
  return drivers.filter(function(driver){
    for(const key in match){
      return driver[key] === match[key];
    };
  });
};

function exactMatchToList(drivers, match){
  return exactMatch(drivers, match).map(function(driver){
    return driver.name;
  });
};
