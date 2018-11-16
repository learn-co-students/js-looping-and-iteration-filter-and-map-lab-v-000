// Code your solution here:
// filter for comparisons and doesnt have nil
// map for
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name
  })
  }

function exactMatch(drivers, matcher) {
  let keys = Object.keys(matcher)
  // matcher = { apple: 10, pear: 5 }
  // keys = [ "apple", "pear" ]
  let k = keys[0]
  // k = "apple"

  return drivers.filter(function(driver) {
    // driver = { apple: 10 }
    return driver[k] === matcher[k]
    // driver["apple"] === matcher["apple"]
  })
}

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher).map(function(driver) {
    return driver.name
  })
}
