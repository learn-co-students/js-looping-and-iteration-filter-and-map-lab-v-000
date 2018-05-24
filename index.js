// Code your solution here:
function driversWithRevenueOver (drivers, amount) {
  return drivers.filter (function (driver){
    return driver.revenue > amount
  })
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map (function (driver){
      return driver.name
  })
}

function exactMatch(drivers, hash) {
  return drivers.filter (function (driver){
    let matches = false
    for (const key in hash) {
      matches = driver[key]  === hash[key]
    }
    return matches
  })
}

function exactMatchToList(drivers, hash) {
  return exactMatch(drivers, hash).map (function (driver){
    return driver.name
  })
}
