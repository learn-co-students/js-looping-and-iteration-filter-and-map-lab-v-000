// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver['revenue'] > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let result = driversWithRevenueOver(drivers, revenue)

  return result.map( function (driver) {
    return driver = driver['name']
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter( d => d.name === obj.name || d.revenue === obj.revenue )
}

function exactMatchToList(drivers, obj) {
  let result = exactMatch(drivers, obj)

  return result.map( function (driver) {
    return driver = driver['name']
  })
}
