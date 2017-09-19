function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function exactMatch(drivers, attributes){
  let attribute = Object.keys(attributes)[0]

  return drivers.filter(function(driver){
    return driver[attribute] == attributes[attribute]
  })
}

function exactMatchToList(drivers, attributes){
  let matchingDrivers = exactMatch(drivers, attributes)
  return driversToNames(matchingDrivers)
}

function driversToNames(drivers){
  return drivers.map(function(driver){
    return driver.name
  })
}


function driverNamesWithRevenueOver(drivers, revenue){
  let matchingDrivers =  driversWithRevenueOver(drivers, revenue)
  return driversToNames(matchingDrivers)
}
