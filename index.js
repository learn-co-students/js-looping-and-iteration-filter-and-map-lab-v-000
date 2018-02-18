// Code your solution here:
function driversWithRevenueOver(drivers, targetRevenue) {
  return drivers.filter( driver => driver.revenue >= targetRevenue );
}

function driverNamesWithRevenueOver(drivers, targetRevenue) {
  return driversWithRevenueOver(drivers, targetRevenue).map( driver => driver.name );
}

function exactMatch(drivers, driverQuery) {
  return drivers.filter(driver => {
    [[key, value], ...rest] = Object.entries(driverQuery)
    return driver[key] === value
  })
}

function exactMatchToList(drivers, driverQuery) {
  return exactMatch(drivers, driverQuery).map( driver => driver.name );
}