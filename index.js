// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, query){
  key = Object.keys(query)
  return drivers.filter(driver => driver[key] === query[key])
}

function exactMatchToList(drivers, query){
  return exactMatch(drivers, query).map(driver => driver.name)
}
