// Code your solution here:

function driversWithRevenueOver(arr, revenue){
  return arr.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(arr, revenue){
  return driversWithRevenueOver(arr, revenue).map(function(driver){
    return driver.name;
  });
}

function exactMatch(arr, query){
  return arr.filter(function(driver){
    for(let prop in query){
      if (query[prop] !== driver[prop]){
         return false;
      }
    }
    return true;
  })
}

function exactMatchToList(arr, query){
  return exactMatch(arr, query).map(function(driver){
    return driver.name;
  })
}
