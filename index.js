function driversWithRevenueOver(drivers, revenueMin) {
  return drivers.filter(driver => driver.revenue > revenueMin)
}

function driverNamesWithRevenueOver(drivers, revenueMin) {
  let qualifiedDrivers = driversWithRevenueOver(drivers, revenueMin)

  return qualifiedDrivers.map(driver => driver.name)
}

function exactMatch (drivers, object) {
  let matcher = Object.keys(object)[0]

  return drivers.filter(driver => driver[matcher] === object[matcher])
}

function exactMatchToList (drivers, object) {
  let qualifiedDrivers = exactMatch(drivers, object)

  return qualifiedDrivers.map(driver => driver.name)
}
