// Code your solution here:
function driversWithRevenueOver(drivers, value) {
  return drivers.filter(driver => driver.revenue > value)
}

function driverNamesWithRevenueOver(drivers, value) {
  return driversWithRevenueOver(drivers, value).map(driver => driver.name)
}

function comparedriver(driver, value) {
  for (var key in value) {
    return driver[key] === value[key]
  }
}

// function comparedriver(driver, value) {
//   const newdriver = Object.assign({}, driver, value)
//   return newdriver.name == driver.name && newdriver.revenue == driver.revenue
// }

function exactMatch(drivers, value) {
  return drivers.filter(driver => comparedriver(driver, value))
}

function exactMatchToList(drivers, value) {
  return exactMatch(drivers, value).map(driver => driver.name)
}
