// Code your solution here:
function driversWithRevenueOver(arr, num){
  return arr.filter(function(driver){
    return driver.revenue > num
  })
}

function driverNamesWithRevenueOver(arr, num){
  return driversWithRevenueOver(arr,num).map(function(driver){
    return driver.name
  })
}

function exactMatch(arr, att){
  return arr.filter(function(driver){
    const key = Object.keys(att)[0]
    return driver[key] === att[key]
  })
}

function exactMatchToList(arr, att){
  return exactMatch(arr,att).map(function(driver){
    return driver.name
  })
}
