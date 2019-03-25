// Code your solution here:
function driversWithRevenueOver(drivers, num){
  return drivers.filter(function (driver){
   return driver.revenue > num 
  });
}

function driverNamesWithRevenueOver(drivers, num){
  var newArray = driversWithRevenueOver(drivers, num);
  return newArray.map(function (driver){
    return driver.name
  });
}

function exactMatch(drivers, obj){
  return drivers.filter(function (driver){
    let matches = false;
    
     for (const key in obj){
       matches = driver[key] === obj[key];
     }
     return matches;
    });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
