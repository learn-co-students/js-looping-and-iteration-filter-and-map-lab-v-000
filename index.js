



function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name
  });
};

function exactMatch(drivers, attribute) {
  const key = Object.keys(attribute)[0]
  const value = Object.values(attribute)[0]
    return drivers.filter(function(driver){
      return driver[key] === value
  })
}

function exactMatchToList(drivers, attribute) {
  arr = []
  return exactMatch(drivers, attribute).map(function(driver){
    return driver.name
  });
};
