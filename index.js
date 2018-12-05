// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(
    function(name) {
      return name.revenue > revenue
    }
  )
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(drivers => drivers.name)
}

function exactMatch(driver, obj) {
  return driver.filter(
    function(name) {
      const match = Object.keys(obj)
      /*
      console.log(match[0])
      console.log(name[match[0]])
      */
      return (name[match[0]] === obj[match[0]])
    }
  )
}

function exactMatchToList(driver, obj) {
  return exactMatch(driver, obj).map(drivers => drivers.name)

}