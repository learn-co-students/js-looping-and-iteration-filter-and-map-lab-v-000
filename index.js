// Code your solution here:
const drivers = [];

function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function(driver) {
    return driver.revenue > rev;
  });
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(
    function(driver) {
      return driver.name;
  });
} 

function exactMatch(drivers, cond) {
  const metCond = drivers.filter(function(d) {
    return ((cond.name === d.name) || (cond.revenue === d.revenue));
  });
  return metCond;
}

function exactMatchToList(extendedDrivers, cond) {
  return exactMatch(extendedDrivers, cond).map(
    function(d) {
      return d.name;
    }
  );
}

