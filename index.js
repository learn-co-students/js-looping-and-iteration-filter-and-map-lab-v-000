// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, amount) {
  matchingDrivers = driversWithRevenueOver(drivers, amount)
  return matchingDrivers.map(driver => driver.name)
}

function exactMatch(drivers, criteria) {
  return drivers.filter(function (driver) {
      for (const key in criteria) {
        if (driver[key] === criteria[key]) {
          return driver
        }
      }
  })
}

function exactMatchToList(drivers, criteria) {
  return exactMatch(drivers, criteria).map(driver => driver.name)
}
