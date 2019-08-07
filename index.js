function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  let driversArray = driversWithRevenueOver(drivers, revenue);
  return driversArray.map(driver => driver.name);
}

function exactMatch(drivers, driverObject){
  return drivers.filter(function(driver){
    for (const key in driver){
      if ( driver[key] === driverObject[key]){
        return driver;
      }
    }
  })
}

function exactMatchToList(drivers, driverObject){
  let matchedDriverArray = exactMatch(drivers, driverObject);
  return matchedDriverArray.map(driver => driver.name);
}
