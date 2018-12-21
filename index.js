// Code your solution here:

function driversWithRevenueOver(drivers, rev) {
  return drivers.filter( driver => driver.revenue > rev )
}

function driverNamesWithRevenueOver(drivers, rev) {
  return drivers.filter( driver => driver.revenue > rev )
  .map(driver => driver.name)
}

function exactMatch(drivers, obj) {
  return drivers.map(  )
  // use keys?

}
