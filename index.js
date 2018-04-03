// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, h) {
  for (const key in h) {
    return drivers.filter(driver => driver[key] == h[key]);
  }
}


function exactMatchToList(drivers, h) {
  return exactMatch(drivers, h).map(driver => driver.name);
}