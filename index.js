function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(driverAndRevenue){
    return driverAndRevenue.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue)
    .map(function(driver){
      return driver.name;
    });
}



function exactMatch(drivers, obj){
  return drivers.filter(function(driver){
    let match = null;
    for (const objKey in obj){
      match = obj[objKey] === driver[objKey]
    }
    return match;
  });
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj)
    .map(function(driver){
      return driver.name;
    });
}
