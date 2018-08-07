// Code your solution here:
function driversWithRevenueOver (collection, amount) {
  return collection.filter (function(driver) {
    return driver.revenue > amount
  })
}

function driverNamesWithRevenueOver (collection, revenue) {
  return driversWithRevenueOver(collection, revenue).map(function (driver) {
      return driver.name;
    });
}

function exactMatch (collection, keyvalue) {
  return collection.filter(function(driver) {
    for (const key in keyvalue) {
      return driver[key] === keyvalue[key]
    }
  })
}

function exactMatchToList(collection, keyvalue) {
  return exactMatch(collection, keyvalue).map(function(driver){
    return driver.name
  })
}
