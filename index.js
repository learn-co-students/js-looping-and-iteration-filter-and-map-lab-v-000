// Code your solution here:


function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  // const driverObjects = drivers.filter(driver => driver.revenue > revenue)
  // return driverObjects.map(driver => driver.name)

  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)

}

function exactMatch(drivers, object) {
  for (const key in object) {
    return drivers.filter(driver=>  driver[key] === object[key])
    }
  }


function exactMatchToList(drivers, object){
  return exactMatch(drivers, object).map(driver => driver.name)
}
