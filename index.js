let driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

let driverNamesWithRevenueOver = (drivers, revenue) => {
    return driversWithRevenueOver(drivers, revenue).map(function (driver) {
      return driver.name;
    })
}

let exactMatch = (drivers, obj) => {
  return drivers.filter(function (driver) {
    for (const key in obj)
      return driver[key] === obj[key]
  })
}

let exactMatchToList = (drivers, obj) => {
  let matchedDrivers = exactMatch(drivers, obj)

  return  matchedDrivers.map(function (driver) {
    return driver.name;
  })
}
