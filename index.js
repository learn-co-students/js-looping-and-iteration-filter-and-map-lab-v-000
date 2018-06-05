

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver_obj) {
    return driver_obj.revenue > revenue
  }).map(function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, input) {
  return drivers.filter(function (driver) {
    
      return driver[Object.keys(input)] === input[Object.keys(input)]
  })  
}

function exactMatchToList(drivers, input) {
  return exactMatch(drivers, input).map(function (matches) {
    return matches.name
  })
}