// Code your solution here:

function driversWithRevenueOver(driver, revenue){
  return driver.filter(i => i.revenue > revenue)
  }

function driverNamesWithRevenueOver(driver, name){
  let myArray = driversWithRevenueOver(driver, name)
  return myArray.map(i => i.name)
}

function exactMatch(collection, object) {
  return collection.filter(function(driver) {
    return driver[Object.keys(object)[0]] === Object.values(object)[0];
  })
}

function exactMatchToList(collection, object) {
  let driversList = exactMatch(collection, object)
  return driversList.map(function(driver) {
    return driver.name
  })
}
