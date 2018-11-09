function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name)
}

function exactMatch(drivers, object){
  const objKey = Object.keys(object)
  const objValue = Object.values(object)[0]
  return drivers.filter(driver => driver[objKey] === objValue)
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(driver => driver.name)
}