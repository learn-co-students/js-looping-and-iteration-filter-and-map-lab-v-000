// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    if (driver.revenue > revenue){ return driver };
  })
}


function driverNamesWithRevenueOver(drivers, revenue) {
  driverRevenue = drivers.filter(function(driver) {
    return driver.revenue > revenue
    })
  return driverRevenue.map(function(driver) {
    return driver.name
  })
}


function exactMatch(drivers, object) {
  let key = Object.keys(object)
  return drivers.filter(function (driver) {
    return driver[key] === object[key]
  })
}

function exactMatchToList(drivers, object) {
  let key = Object.keys(object)
  driverNames = drivers.filter(function (driver) {
    return driver[key] === object[key]
  })
  return driverNames.map(function(driver) {
    return driver.name
  })
}