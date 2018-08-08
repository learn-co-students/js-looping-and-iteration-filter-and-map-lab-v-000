// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    if (driver.revenue > revenue) {
      return driver;
    }
  });
}

function driverNamesWithRevenueOver(drivers, rev) {
  const newdrivers = driversWithRevenueOver(drivers,rev);
  return newdrivers.map(function (driver) { return driver.name; });
}

function exactMatch(extendedDrivers, object){
  //debugger;
  return extendedDrivers.filter(function (driver) {
    //debugger;
    const key = Object.keys(object)[0]
    if(driver[key] === object[key]){
      return driver;
    }
  });
}

function exactMatchToList(extendedDrivers, object) {
  const newdrivers = exactMatch(extendedDrivers, object);
  return newdrivers.map(function (driver) {return driver.name; });
}
