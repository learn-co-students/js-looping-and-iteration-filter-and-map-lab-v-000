// Code your solution here:
function driversWithRevenueOver(collection,revenue) {
  return collection.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(collection, revenue) {
  let driversList = driversWithRevenueOver(collection, revenue)
  return driversList.map(function(driver) {
    return driver.name
  })
}

function exactMatch(collection, object) {
  return collection.filter(function(driver) {
    return driver[Object.keys(object)[0]] === Object.values(object)[0];
  })
}

function exactMatchToList(collection, object) {
  let driversList = exactMatch(collection, object)
  return driversList.map(function(driver) {
    return driver.name
  })
}
