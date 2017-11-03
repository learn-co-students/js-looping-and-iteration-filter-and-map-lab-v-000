// Code your solution here:

function driversWithRevenueOver (drivers, amount){
  return drivers.filter(function(driver){
        return  driver.revenue > amount
    
  })
}

function driverNamesWithRevenueOver (driver, amount){
    return driversWithRevenueOver (driver, amount)
    .map(function (driver){ 
      return driver.name
      
    })
  
}

function exactMatch(drivers, match){ 
  
  return drivers.filter(function (driver){
    let matches = false

    for (const key in match){
      matches = driver[key] === match[key]
    }
    return matches
  }) 

}

function exactMatchToList(drivers, match){
  return exactMatch(drivers, match)
    .map(function(driver){
      return driver.name
    })
  
}