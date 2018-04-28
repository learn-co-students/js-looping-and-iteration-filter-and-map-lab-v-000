// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue){
  const newArray = drivers.filter(function (driver){return driver.revenue > revenue})
  return newArray.map(function (driver) {return driver.name})
}

function exactMatch(drivers, obj){
  return drivers.filter(function (driver){
    const key = Object.keys(obj)
    return driver[key] === obj[key]
  })
}

function exactMatchToList(drivers, obj){
  const newArray = drivers.filter(function (driver){
    const key = Object.keys(obj)
    return driver[key] === obj[key]
  })
  return newArray.map(function(driver) {return driver.name})
}
