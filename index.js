// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(d) {return d.revenue > revenue})
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function(d) {return d.name})

}

function exactMatch(driver, attr) {
  selectedAttr = driver.filter(function(d) {
    return ((d.name === attr.name) || (d.revenue === attr.revenue))})
    return selectedAttr
}


function exactMatchToList(driver, attr) {
  return exactMatch(driver, attr).map(function(d) {return d.name})

}
