// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const matchingDrivers = [];
  drivers.map( function(driver){
    if (driver.revenue > revenue){
      matchingDrivers.push(driver)
    }
  });
  return matchingDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const matchingDriversNames = [];
  const newDrivers = driversWithRevenueOver(drivers, revenue);
  for (driver of newDrivers) {
    matchingDriversNames.push(driver.name);
  }
  return matchingDriversNames;
}

function exactMatch(drivers, obj) {
  const matchingDrivers = [];
  let key = Object.keys(obj)[0];
  let value = Object.values(obj)[0];
  drivers.map( function(driver) {
    if (driver[key] === obj[key]) {
      matchingDrivers.push(driver)
    }
  });
  return matchingDrivers;
}

function exactMatchToList(drivers, obj) {
  const matchingDriversNames = [];
  const newDrivers = exactMatch(drivers, obj);
  for (driver of newDrivers) {
    matchingDriversNames.push(driver.name);
  }
  return matchingDriversNames;
}
