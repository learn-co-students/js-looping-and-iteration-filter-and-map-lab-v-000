function driversWithRevenueOver(drivers,revenue){
  return drivers.filter( function(driver) {
    return driver.revenue > parseInt(revenue, 10);
  });
}


function driverNamesWithRevenueOver(drivers, revenue) {
  // I: array of objects
  //O:  an array of strings for the name of each driver

  return driversWithRevenueOver(drivers, revenue).map( function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, conditionObj) {
  return drivers.filter( function(driver) {
    const conditionKey = Object.keys(conditionObj)[0];
    return driver[conditionKey] === conditionObj[conditionKey];
  });
}

function exactMatchToList(drivers, conditionObj) {
  return exactMatch(drivers, conditionObj).map( function(driver) {
    return driver.name;
  });
}
