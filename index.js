// Code your solution here
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  })
}

function exactMatch(drivers, attr) {
  return drivers.filter(function(driver){
    for(key in attr){
      return driver[key] === attr[key]
    }
  })
}

function exactMatchToList(drivers, attr){
  return exactMatch(drivers, attr).map(function(driver){
    return driver.name;
  })
}
