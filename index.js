// Code your solution here:
/*
driversWithRevenueOver- This function takes an array of
driver JavaScript objects as the first argument and a
string called revenue as the second argument. It returns
an array of driver objects that have a revenue attribute
that's greater than the passed-in revenue argument.
*/
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    let match = false;

    for (const key in object) {
      match = driver[key] === object[key];
    }

    return match;
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver) {
    return driver.name
  });
}
