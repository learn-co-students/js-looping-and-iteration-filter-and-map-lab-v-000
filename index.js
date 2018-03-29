function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter((driver) => {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map((driver) => {
    return driver.name
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter((driver) => {
    const key = Object.keys(obj)[0]
    return driver[key] === obj[key]
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map((driver) => {
    return driver.name
  })
}
