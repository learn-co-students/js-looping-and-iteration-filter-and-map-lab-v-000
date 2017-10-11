// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver["revenue"] > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  driverObjects = drivers.filter(function (driver) {return driver["revenue"] > revenue})
  return driverObjects.map(function (driver) {return `${driver["name"]}`})
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (driver) {return driver[`${Object.keys(obj)[0]}`] === obj[`${Object.keys(obj)[0]}`]})
}

function exactMatchToList(drivers, obj) {
  filtered = drivers.filter(function (driver) {return driver[`${Object.keys(obj)[0]}`] === obj[`${Object.keys(obj)[0]}`]})
  return filtered.map(function (driver) {return `${driver["name"]}`})
}
