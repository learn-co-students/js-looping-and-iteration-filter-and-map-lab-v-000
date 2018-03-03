// Code your solution here:
function driversWithRevenueOver(list, revenue){
  return list.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(list, revenue){
  return driversWithRevenueOver(list, revenue).map(function (driver) {
    return driver.name
  });
}


function exactMatch(list, condition) {
  return list.filter(function(driver) {
      let result = false;

        for (const key in condition) {
          result = driver[key] === condition[key];
        }

      return result;
    });
  }


function exactMatchToList(list, condition){
  return exactMatch(list, condition).map(function(driver){
    return driver.name
  });
}
