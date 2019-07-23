function driversWithRevenueOver(drivers, revenue) {
  const newDrivers = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
  return newDrivers
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, keyVal) {
  for(const key in keyVal) {
    return drivers.filter(function(driver) {
      return driver[key] === keyVal[key]
    })
  }
}

function exactMatchToList(drivers, keyVal) {
  const newDrivers = exactMatch(drivers, keyVal);
  return newDrivers.map(function(driver) {
    return driver.name 
  })
}
