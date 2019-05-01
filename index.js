// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers,revenue).map(function(driver){return driver.name})
}

function exactMatch(drivers, search) {
  return drivers.filter(function(driver) {
    for (const key in search) {
      if (driver[key] === search[key]) {
        return true
      } else {
        return false
      }
    }
  })
}

function exactMatchToList(drivers, search) {
  return exactMatch(drivers,search).map(function(driver){return driver.name})
}