// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
 return drivers.filter(function(driver) {
   return driver.revenue > revenue
 })
}

function driverNamesWithRevenueOver(drivers, revenue) {
return driversWithRevenueOver(drivers, revenue).map((driver) => {return driver.name})
}

function exactMatch(drivers, arg) {
  let key = Object.keys(arg)[0]
  return drivers.filter(function (driver) {
    return driver[`${key}`] === arg[`${key}`];
  });
}

function exactMatchToList(drivers, arg) {
  return exactMatch(drivers, arg).map((driver) => {return driver.name})
}