function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > parseInt(revenue)
  })
}
//revenue is a string
function driverNamesWithRevenueOver(drivers, revenue) {
  const driverObjects = driversWithRevenueOver(drivers, revenue) //array of objects
  const driverArray = driverObjects.map(function(driver) {return driver.name})
  return driverArray
}
//returns an array of strings with names
function exactMatch(drivers, attrObj) {
  const driversArray = drivers.filter(
    function(driver) {for (const key in attrObj) {return driver[key] === attrObj[key]}})
  return driversArray
}
//returns an array of objects
function exactMatchToList(drivers, attrObj) {
  const driverNameArray = exactMatch(drivers, attrObj).map(
    function(driver) {return driver.name}
  )
  return driverNameArray
}
