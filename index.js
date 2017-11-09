// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name)
}

function exactMatch(drivers, varObj) {
  return drivers.filter(driver => driver[Object.keys(varObj)[0]] === Object.values(varObj)[0])
}

function exactMatchToList(drivers, varObj) {
  return drivers.filter(driver => driver[Object.keys(varObj)[0]] === Object.values(varObj)[0]).map(driver => driver.name)
}
