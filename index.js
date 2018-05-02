// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(x) {
    return x.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(x => x.name)
}

function exactMatch(drivers, attribute) {
  matchingDrivers = drivers.map(function(x) {
    if (x[Object.keys(attribute)[0]] === Object.values(attribute)[0]) {
      return x
    }
  })
  return matchingDrivers.filter(function(x) {
    return x !== undefined
  })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(x => x.name)
}
