// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driverObj) {
    return driverObj.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let matchingDrivers = drivers.filter(function(driverObj) {
    return driverObj.revenue > revenue
  })
  return matchingDrivers.map(function(driverObj) {
    return driverObj.name
  })
}

function exactMatch(drivers, obj) {
  let key = Object.keys(obj)
  return drivers.filter(function(driverObj) {
    return driverObj[key] === obj[key]
  })
}

function exactMatchToList(drivers, obj) {
  let key = Object.keys(obj)
  let matchingNames = drivers.filter(function(driverObj) {
    return driverObj[key] === obj[key]
  })
  return matchingNames.map(function(driverObj) {
    return driverObj.name
  })
}
