// Code your solution here:

function driversWithRevenueOver(drivers, rev) {
  return drivers.filter( driver => driver.revenue > rev )
}

function driverNamesWithRevenueOver(drivers, rev) {
  return drivers.filter( driver => driver.revenue > rev )
  .map(driver => driver.name)
}

function exactMatch(drivers, obj) {
  // pull first key from `obj` as an arr
  const cey = Object.keys(obj)[0]
  const val = Object.values(obj)[0]
  return drivers.filter ( d => d[cey] === val )
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj).map(d=>d.name)
}
