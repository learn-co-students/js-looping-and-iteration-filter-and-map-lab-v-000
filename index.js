// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter( function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
     return driver.name;
   });
}

function exactMatch(drivers, ematch) {
  return drivers.filter( function(driver) {
    let match = false;

   for (const key in ematch) {
     match = driver[key] === ematch[key];
   }

   return match;
  })
}

function exactMatchToList(drivers, ematch){
  const matchDrivers = exactMatch(drivers, ematch);
  return matchDrivers.map(function (driver) { return driver.name })
}
