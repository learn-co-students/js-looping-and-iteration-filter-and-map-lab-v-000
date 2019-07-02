// Code your solution here:
function driversWithRevenueOver(drivers, numString){
    return drivers.filter(x => x.revenue > parseInt(numString));
}
// Remember we can call on other functions to reduce logic. DRY!! 
function driverNamesWithRevenueOver(drivers, numString){
     return driversWithRevenueOver(drivers, numString).map(x => x.name);
}

// bad attempt. NOT DRY
//function driverNamesWithRevenueOver(drivers, numString){
//     return drivers.filter(x => x.revenue > parseInt(numString)).map(x => x.name);
// }


function exactMatch(drivers, object){
    return drivers.filter(x => x.name === object.name || x.revenue === object.revenue)
}

function exactMatchToList(drivers, object){ 
    return exactMatch(drivers, object).map(x => x.name)
}

/* ----------------------FLATIRON SOLN ----------------------------------------
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
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
*/