function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map (function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, item){
  return drivers.filter(function(driver){
    for (const key in item){
      return driver[key] === item[key];
    }
  })
}

function exactMatchToList(drivers, item) {
  return exactMatch(drivers, item).map(function(driver) {
    return driver.name;
  })
}
