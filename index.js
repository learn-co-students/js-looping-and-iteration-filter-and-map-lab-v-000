// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
    return driver.name;
  });
}

function exactMatch (drivers, exact) {
  return drivers.filter(function (driver){
    let matches = false;

    for (const key in exact) {
      matches = driver[key] === exact[key];
    }
    return matches;
  });
}

function exactMatchToList (drivers, exact) {
  return exactMatch(drivers, exact)
    .map(function (driver){
      return driver.name;
    });
}
