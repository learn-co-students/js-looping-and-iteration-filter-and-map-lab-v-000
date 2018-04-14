// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const qualifyingDrivers = driversWithRevenueOver(drivers, revenue)
  return qualifyingDrivers.map(function(driver) {
    return driver.name
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    return driver.name === obj.name || driver.revenue === obj.revenue
  })
}

function exactMatchToList(drivers, obj) {
  const qualifyingDrivers = exactMatch(drivers, obj)
  return qualifyingDrivers.map(function(driver) {
    return driver.name
  })
}
