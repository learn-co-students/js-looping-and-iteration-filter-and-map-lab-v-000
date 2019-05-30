// Code your solution here:
function driversWithRevenueOver(driver, revenue ) {

  return driver.filter(function(rev) { return rev.revenue > revenue} )
}

function driverNamesWithRevenueOver(driver, revenue ) {
  return driver.filter(function(rev) {
     return rev.revenue > revenue}).map(function(x) {
       return x.name
     })
}

function exactMatch(drivers, obj) {
  key = Object.keys(obj)

  return drivers.filter(function(x) {
    return x[key[0]] === obj[key[0]]
  })/*.map(function(y) {
    //debugger
    return y
  })*/
}

function exactMatchToList(drivers, obj) {
  key = Object.keys(obj)[0]

  return drivers.filter(function(x) {
    return x[key] === obj[key]
  }).map(function(y) {
    //debugger
    return y['name']
  })
}
