// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attr) {
  return drivers.filter(function(driver) {
    return (driver[Object.keys(attr)[0]] === attr[Object.keys(attr)[0]]);
  });
}

function exactMatchToList(drivers, attr) {
  const newDrivers = exactMatch(drivers, attr);
  return newDrivers.map(function(driver) {
    return driver.name;
  });
}
