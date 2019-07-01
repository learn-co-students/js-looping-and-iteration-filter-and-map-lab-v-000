// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function(driver) {
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

function exactMatchToList (drivers, match) {
  return exactMatch(drivers, match)
    .map(function(driver) {
      return driver.name;
  });
}


//exactMatchToList() - This function works the same way as the exactMatch()
//function, except that instead of returning an array of driver objects,
//it returns an array of strings with each element in the array corresponding
//to the matching driver's name. For example, exactMatchToList(drivers,
// { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.
