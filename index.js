// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (user) {return user.revenue > revenue})
}

function driverNamesWithRevenueOver(driver, revenue) {
  const newDrivers = driversWithRevenueOver(driver, revenue);
  return newDrivers.map(function (driver) {return `${driver.name}`})
}

function exactMatch(driver, object) {
  return driver.filter(function (user) {
    return user[Object.keys(object)] === Object.values(object)[0]})
}

function exactMatchToList(driver, object) {
  return exactMatch(driver, object).map(user => user.name)
}
