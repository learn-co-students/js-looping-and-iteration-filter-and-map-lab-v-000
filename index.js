// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver["revenue"] > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  let newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(driver => driver["name"]);
}

function exactMatch(drivers, objToMatch){
  return drivers.filter(function(driver){
    let match = false;
    for (const key in objToMatch){
      match = driver[key] === objToMatch[key];
    }
    return match;
  })
}

function exactMatchToList(drivers, objToMatch){
  let newDrivers = exactMatch(drivers, objToMatch)
  return newDrivers.map(driver => driver.name)
}