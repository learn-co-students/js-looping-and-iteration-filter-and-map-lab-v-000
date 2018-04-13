// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue).map(drive => drive.name)
}

function exactMatch(drivers, obj){
 return drivers.filter(driver => driver[Object.keys(obj)[0]] === Object.values(obj)[0]) 
}

function exactMatchToList(drivers, obj){
  return drivers.filter(driver => driver[Object.keys(obj)[0]] === Object.values(obj)[0]).map(drive => drive.name)
}