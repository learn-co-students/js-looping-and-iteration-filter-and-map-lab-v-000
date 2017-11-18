function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

// function driverNamesWithRevenueOver(drivers, revenue) {
//   const foundDrivers = driversWithRevenueOver(drivers, revenue);

//   return foundDrivers.map(function(driver) {
//     return driver.name;
//   });
// }

//refactored version
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}


function exactMatch(drivers, query) {
  return drivers.filter(function(driver){
      for (const key in driver ) {
        if (driver[key] === query[key]) {
          return true;
        }
      }
  });
}

// function exactMatchToList(drivers, query) {
//   const matchedDrivers = exactMatch(drivers, query);
  
//   return matchedDrivers.map(function(driver){
//     return driver.name;
//   });
// }


// refactored version
function exactMatchToList(drivers, query) {
  return exactMatch(drivers, query).map(function(driver){
    return driver.name;
  });
}



