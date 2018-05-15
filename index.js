// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  }
)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  }).map(function (driver) {return driver.name})
}

function exactMatch(drivers, obj) {
  const key = Object.keys(obj)[0]
  const value = Object.values(obj)[0]
  return drivers.filter(function(driver) {
    return driver[key] === value
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver) {return driver.name})
  }
