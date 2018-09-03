// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers,revenue).map (driver => driver.name)
}

function exactMatch(drivers, object) {
  let key = Object.keys(object)[0];
  return drivers.filter(function (driver) {return driver[key] === object[key];});
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map (driver => driver.name)
}
