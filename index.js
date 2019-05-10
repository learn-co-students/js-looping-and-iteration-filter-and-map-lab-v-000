// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driverObject) { return driverObject.revenue > revenue; });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const richDrivers = drivers.filter(function (driver) { return driver.revenue  > revenue; });

  return richDrivers.map(function (driver) { return driver.name; });
}

function exactMatch(drivers, attribute) {
  let key = Object.keys(attribute)[0];
  let value = Object.values(attribute)[0];

  return drivers.filter(function (driver) { return driver[key] === value; });
}

function exactMatchToList(drivers, attribute) {
  let key = Object.keys(attribute)[0];
  let value = Object.values(attribute)[0];

  const filtered = drivers.filter(function (driver) { return driver[key] === value; });

  return filtered.map(function (driver) { return driver.name; });
}
