function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {

    // returns an array of driver objects that have a revenue attribute that's greater than the passed-in rev argument
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {

    // returns an array of strings representing the name of each driver who has a revenue greater than the specified amount.
    return driver.name;
  });
};

// exactMatch(drivers, { revenue: 3000 })
function exactMatch(drivers, match) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in match) {
      matches = driver[key] === match[key];
    };
return matches;
  });
};

// returns an array of strings with each element in the array corresponding to the matching driver's name.
function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(function (driver) {
    return driver.name;
  });
};