function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  })
}

function exactMatch(drivers, obj) {
   return drivers.filter(function(driver) {
     for (let key in obj) {
       return driver[key] === obj[key]
     }
   })
 }

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name;
  })
}
