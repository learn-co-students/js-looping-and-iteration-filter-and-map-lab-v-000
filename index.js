function driversWithRevenueOver(array, revenue) {
  return array.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map(function(driver){
    return driver.name
  })
}

function exactMatch(array, object) {
  return array.filter(function(driver) {
    for (const key in object) {
    return driver[key] == object[key]
    }
  })
}

function exactMatchToList(array, object) {
  return exactMatch(array, object).map(function(driver){
    return driver.name
  })
}
