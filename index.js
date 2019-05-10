// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(e) {
    return e.revenue > revenue;
  });
}


function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue)
    .map(function(x) {
      return x.name
  });
};


function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
};

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher)
  .map(function(x) {
    return x.name
  });
};
