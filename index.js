// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    if(driver.revenue > revenue){
      return driver;
    }
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.map(function (driver) {
    if(driver.revenue > revenue){
      return `${driver.name}`;
    }
  })
    .filter(function(driver){return driver})
}

function exactMatch(drivers, query) {
  return drivers.filter(function (driver){
    for (const key in query) {
      if (driver[key] === query[key]) {
        debugger;
      return driver
    }
    }
  })
}
function exactMatchToList(drivers, query) {

  return exactMatch(drivers, query).map(function (driver) {
    return driver.name
  });
}
