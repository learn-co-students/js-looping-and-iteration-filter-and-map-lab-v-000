// return an array of driver objects that have a revenue
// greater than the passed-in revenue argument
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
};

// return the names of driver objects that have a revenue
// greater than the passed-in revenue argument
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
  .map(function(driver) {
    return driver.name;
  });
};

// return an array driver objects that have a matching
// attribute
function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    let match = false;
    for (const key in attribute) {
      match = (driver[key] === attribute[key]);
    };
    return match;
  });
};

// return the names of driver objects that have a matching
// attribute
function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute)
  .map(function(driver) {
    return driver.name;
  });
};
