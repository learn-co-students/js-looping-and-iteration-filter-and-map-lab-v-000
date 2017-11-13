// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name);
}

function exactMatch(drivers, object) {
  return drivers.filter(driver => driver[Object.keys(object)[0]] === Object.values(object)[0]);
}

function exactMatchToList(drivers, object) {
  return drivers.filter(driver => driver[Object.keys(object)[0]] === Object.values(object)[0]).map(driver => driver.name)
}
