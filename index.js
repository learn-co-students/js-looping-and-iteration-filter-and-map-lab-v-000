// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  const filteredDrivers = drivers.filter(function (driver) {
    return driver.revenue > amount;
  });
  return filteredDrivers;
}

function driverNamesWithRevenueOver(drivers, amount) {
  const filteredDrivers = drivers.filter(function (driver) {
    return driver.revenue > amount
  });
  return filteredDrivers.map(d => `${d.name}`);
}

function exactMatch(drivers, object) {
  const key = Object.keys(object)[0]
  const matchedDriver = drivers.filter(function (driver) {
    return driver[key] === object[key];
  });
  return matchedDriver;
}

function exactMatchToList(drivers, object) {
  const key = Object.keys(object)[0]
  const matchedDriver = drivers.filter(function (driver) {
    return driver[key] === object[key];
  });
  return matchedDriver.map(d => `${d.name}`);
}
