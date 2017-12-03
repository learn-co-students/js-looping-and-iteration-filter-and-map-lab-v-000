// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > parseInt(revenue, 10)
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name
  })
}

function exactMatch(drivers, toMatch) {
  return drivers.filter(function(driver) {
    for (const attr in driver) {
      if (driver[attr] === toMatch[attr]) {
        return driver
      }
    }
  })
}

function exactMatchToList(drivers, toMatch) {
  return exactMatch(drivers, toMatch).map(function(driver){
    return driver.name
  })
}
