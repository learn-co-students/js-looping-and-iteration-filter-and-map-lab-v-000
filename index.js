// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {return driver.name;});
}

// 2nd argument is a key value pair and looks like { something: value }
function exactMatch(drivers, pair) {
  return drivers.filter(function (driver) {
    let match_found = false;
    
    for (const key in pair) {
      match_found = driver[key] === pair[key];
    }
    return match_found;
  })
}

function exactMatchToList(drivers, pair) {
  return exactMatch(drivers, pair).map(function (driver) {return driver.name;});
}
