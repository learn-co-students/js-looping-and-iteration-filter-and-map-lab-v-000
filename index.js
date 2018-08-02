// Code your solution here:

function driversWithRevenueOver(collection, key){
  return collection.filter(function(driver){
    return driver.revenue > key
  })
}

function driverNamesWithRevenueOver(collection, key){
  return driversWithRevenueOver(collection, key).map(
    function(driver){
      return driver.name
    })
}

function exactMatch(collection, lookUp){
  return collection.filter(function(driver){
    let find = false;

    for (const match in lookUp){
      find = driver[match] === lookUp[match]
    }

    return find
  })
}


function exactMatchToList(collection, lookUp){
  return exactMatch(collection, lookUp).map(
    function(driver){
      return driver.name
    }
  )
}
