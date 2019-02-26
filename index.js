// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers,attr) {
  let k = Object.keys(attr)[0];
  let v = attr[k];
  return drivers.filter(driver => driver[k] === v)
}

function exactMatchToList(drivers,attr) {
  return exactMatch(drivers,attr).map(driver => driver.name)
}