// Code your solution here:

function driversWithRevenueOver(obj, rev) {
  return obj.filter(function(driver) { return driver.revenue > rev })
}

function driverNamesWithRevenueOver(obj, rev) {
  let newObj = driversWithRevenueOver(obj, rev)
  return newObj.map(
    function (driver) {
      return driver.name
    }
  )
}

function exactMatch(obj, search) {
  return obj.filter(
    function(driver) {
      // console.log(driver[Object.keys(search)[0]])
      return driver[Object.keys(search)[0]] == search[Object.keys(search)[0]]
    }
  )
}

function exactMatchToList(obj, search) {
  let ex = exactMatch(obj, search)
  return ex.map(
    function (driver) {
      return driver.name
    }
  )
}
