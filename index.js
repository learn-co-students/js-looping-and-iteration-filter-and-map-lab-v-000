// Code your solution here:
function driversWithRevenueOver(drivers, rev){
  return drivers.filter(driver => driver.revenue > rev)
}

function driverNamesWithRevenueOver(drivers, rev){
  const highRollers = driversWithRevenueOver(drivers, rev)
  return highRollers.map(driver => driver.name)
}

function exactMatch(drivers, object){
  return drivers.filter(function(driver){
    match = false
    for(const key in object){
      match = driver[key] === object[key]
    }
      return match
  })
}

function exactMatchToList(drivers, object){
  matches = exactMatch(drivers, object)
  return matches.map(m => m.name)
}
