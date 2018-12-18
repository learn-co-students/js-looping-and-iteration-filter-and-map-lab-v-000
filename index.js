// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver["revenue"] > revenue })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver["revenue"] > revenue }).map(
    function(driver) {return driver.name}
  )
}

function exactMatch(drivers, attribute) {
  const attributeName = Object.keys(attribute)
  const attributeValue = Object.values(attribute)
  return drivers.filter(function(driver) { return driver[attributeName[0]] === attributeValue[0] })
}

function exactMatchToList(drivers, attribute) {
  const attributeName = Object.keys(attribute)
  const attributeValue = Object.values(attribute)
  return drivers.filter(function(driver) { return driver[attributeName[0]] === attributeValue[0] }).map(
    function(driver) {return driver.name}
  )
}
