// Code your solution here:
function driversWithRevenueOver(drivers, amount){
  return drivers.filter(function (driver) {
    return driver.revenue > amount
  })
}

function driverNamesWithRevenueOver(drivers, amount){
  return driversWithRevenueOver(drivers, amount).map(function (driver){
    return `${driver.name}`
  })
}

function exactMatch(drivers, object){
  return drivers.filter(function (driver) {
    let matches = false

    for (const key in object){
      matches = driver[key] === object[key]
    } 

    return matches
  })
}

function exactMatchToList(drivers, object){
  return exactMatch(drivers, object).map(function (driver){
    return `${driver.name}`
  })
}