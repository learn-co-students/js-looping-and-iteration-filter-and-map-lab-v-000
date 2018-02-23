// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter( function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver (drivers, revenue) {
  names = driversWithRevenueOver(drivers, revenue)
  return names.map( function(driver) {
    return driver.name
  })
}

function exactMatch (drivers, object) {
  return drivers.filter (function (driver) {
    for (const key in object) {
      return driver[key] === object[key]
        }
    })
}

function exactMatchToList (drivers, object){
  names = exactMatch(drivers, object)
  return names.map(function(driver) {
    return driver.name
  })
}
