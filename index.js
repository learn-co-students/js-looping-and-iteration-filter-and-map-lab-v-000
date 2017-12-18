// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const driversOver = drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
  return driversOver;
};

function driverNamesWithRevenueOver(drivers, revenue) {
  const namesOver = driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
  return namesOver;
};

function exactMatch(drivers, attributes) {
  const attr = Object.keys(attributes);
  const val = attributes[attr];
  const matches = drivers.filter(function (driver) {
    return driver[attr] === val;
  });
  return matches;
};

function exactMatchToList(drivers, attributes) {
  const names = exactMatch(drivers, attributes).map(function (driver) {
    return driver.name;
  });
  return names;
};
