// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter ( function(driver) { if (driver.revenue > revenue) { return driver } })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map ( function(driver){ return driver.name } )
}

function exactMatch(drivers, driverObject) {
  key = Object.keys(driverObject)[0]
  value = Object.values(driverObject)[0]
  return drivers.filter ( function(driver) {return driver[key] === value })

  //return drivers.filter( function(driver) {
  //  for (const key in driverObject) {matches = driver[key] === driverObject[key] } return matches } )
  }

function exactMatchToList(drivers, driverObject) {
  return exactMatch(drivers, driverObject).map ( function(driver){ return driver.name } );
}
