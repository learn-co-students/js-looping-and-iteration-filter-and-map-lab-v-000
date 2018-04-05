// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  return collection.filter(function(obj) {
    return obj.revenue > revenue
  })
}


function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(obj){
    return obj.name
  })
}


function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    for (const key in obj) {
      return driver[key] === obj[key]
    }
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name
  })
}
