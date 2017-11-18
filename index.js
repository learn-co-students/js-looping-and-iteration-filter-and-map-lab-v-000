// Code your solution here:
function driversWithRevenueOver(drivers, dollar) {
  return drivers.filter(function(driver) {return driver.revenue > dollar});
}

function driverNamesWithRevenueOver(drivers, dollar) {
  return drivers.filter(function(driver) {return driver.revenue > dollar}).map(function(name) { return name.name});
}

function exactMatch(drivers, matcher){
  return drivers.filter(function(driver){
    let matches = false
      for (const key in matcher) {
          matches = driver[key] === matcher[key]
} return matches})

}


function exactMatchToList(drivers,key){
  return exactMatch(drivers,key).map(function(name) {return name.name})
}
