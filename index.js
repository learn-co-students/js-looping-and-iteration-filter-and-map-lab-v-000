const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter(function (driver) {return driver.revenue > revenue})
}
const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name
  })
}
const exactMatch = (drivers, attribute) => {
  return drivers.filter(function (driver) {
    return driver[Object.keys(attribute)[0]] === attribute[Object.keys(attribute)[0]]
  })
}
const exactMatchToList = (drivers, attribute) => {
  return exactMatch(drivers, attribute).map(function (driver) {return driver['name']})
}