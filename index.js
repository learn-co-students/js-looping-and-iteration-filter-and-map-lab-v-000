// Code your solution here:


function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
      return driver.revenue > revenue
    } )
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newArray = driversWithRevenueOver(drivers, revenue)
  return newArray.map(function(driver) {
    return driver.name
  })
}

function exactMatch(drivers, keyValue) {
  return drivers.filter(function(driver) {
    for (const key in driver) {
      if (driver[key] === keyValue[key])
        return driver
    }
  })
}

function exactMatchToList(drivers, keyValue) {
  const newDrivers = exactMatch(drivers, keyValue)
    return newDrivers.map(function(driver) {
      return driver.name
    })
}
