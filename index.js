// Code your solution here:

function driversWithRevenueOver(array, string){
  return array.filter(function(driver){
    return driver.revenue > string
  })
}

function driverNamesWithRevenueOver(array, string){
  return driversWithRevenueOver(array, string).map(function(driver){
    return driver.name
  })
}

function exactMatch(array, match){
  return array.filter(function(driver){
    let matches = false
    for (const key in match){
      matches = driver[key] === match[key]
    }
    return matches
  })
}

function exactMatchToList(array, match){
  return exactMatch(array, match).map(function(driver){
    return driver.name 
  })
}
