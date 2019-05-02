// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers, revenue).map(function (driver){
    return driver.name
  });
}

function exactMatch(drivers, attribute){
  return drivers.filter(function (driver) {
    let newCollection = [];

    for (const key in attribute) {
      newCollection = driver[key] === attribute[key];
    }
    return newCollection;
  });
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver){
    return driver.name
  });
}
