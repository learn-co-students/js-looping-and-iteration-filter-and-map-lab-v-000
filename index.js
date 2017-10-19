function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver) {
      return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  });
}


function exactMatch(drivers, attribute){
  let key = Object.keys(attribute);
  return drivers.filter(function (driver) {
      return driver[key] === attribute[key];
  });
}

function exactMatchToList(drivers, attribute){
  return exactMatch(drivers, attribute).map(function(driver){
    return driver.name;
  })
}
