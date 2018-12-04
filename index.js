// Code your solution here:
/*
map - new array with each element being the result of the callback
filter - new array with the elements that pass the test
*/
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(
    function(driver) {
      return driver.revenue > revenue
    }
  )
}

function driverNamesWithRevenueOver(arr, revenue) {
  return driversWithRevenueOver(arr, revenue).map(driver => driver.name)
}

function exactMatch(arr, obj) {
  return arr.filter(
    function(driver) {
      const match = Object.keys(obj)
      /*
      console.log(match[0])
      console.log(driver[match[0]])
      */
      return (driver[match[0]] === obj[match[0]])
    }
  )
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj).map(driver => driver.name)

}
