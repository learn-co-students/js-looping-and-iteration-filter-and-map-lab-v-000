// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const names = drivers.filter(function (driver) {return driver.revenue > revenue})
  return names.map(function (name) {return name.name})
}

function exactMatch(drivers, object) {
  const keys = Object.keys(object)
  const values = Object.values(object)
  return drivers.filter(function (driver) {return driver[keys[0]] === values[0]})
}

function exactMatchToList(drivers, object) {
  const keys = Object.keys(object)
  const values = Object.values(object)
  const names = drivers.filter(function (driver) {return driver[keys[0]] === values[0]})
  return names.map(function (name) {return name.name})
}
