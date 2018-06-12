// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const result = drivers.filter(driver => driver.revenue > revenue);
  return result;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, obj) {
  const match = drivers.filter(driver => driver.name === obj.name || driver.revenue === obj.revenue)
  return match
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name)
}
