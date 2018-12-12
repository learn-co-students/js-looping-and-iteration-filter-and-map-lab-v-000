// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver.revenue > rev)
}

function driverNamesWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver.revenue > rev).map(x => x.name)
}

function exactMatch(drivers, obj) {
  let result = [];
  for ( const driver of drivers) {
    for (const key in obj){
      if (driver[key] === obj[key]){
        result.push(driver)
      }
    }
  }
  return result;
}

function exactMatchToList(drivers, obj){
  let result = [];
  for ( const driver of drivers) {
    for (const key in obj){
      if (driver[key] === obj[key]){
        result.push(driver.name)
      }
    }
  }
  return result;
}
