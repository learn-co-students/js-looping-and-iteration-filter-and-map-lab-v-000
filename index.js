// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  const driverOver = drivers.filter(driver => driver.revenue > revenue);
  return driverOver;
}

function driverNamesWithRevenueOver (drivers, revenue) {
  const driversNames = driversWithRevenueOver(drivers, revenue).map(function(driver){return driver.name;})
  return driversNames;
}

function exactMatch(drivers, object) {
  const driverMatch = drivers.filter(function(driver) {
     for(const key in object){
      return driver[key] === object[key];
    }
  })
  return driverMatch;
}

function exactMatchToList(drivers, object) {
  const driverMatchName = exactMatch(drivers, object).map(function(driver) {return driver.name;})
  return driverMatchName;
}
