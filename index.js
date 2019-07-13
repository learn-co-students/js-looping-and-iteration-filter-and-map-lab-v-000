
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;   
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver){
      return driver.name;
    });
}

function exactMatch(drivers, matching){
  return drivers.filter(function (driver){
    let matches = false;

    for (const key in matching){
      matches = driver[key] === matching[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, matching){
  return exactMatch(drivers, matching)
    .map(function (driver) {
      return driver.name;
    });
}



  
