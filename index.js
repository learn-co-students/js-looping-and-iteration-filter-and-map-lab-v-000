// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  const filtered_objects = drivers.filter(function(driver){
    return (driver.revenue > revenue)
  })
  return filtered_objects.map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, attribute){
  return drivers.filter(function(driver){
    const attrKey = Object.keys(attribute)[0]
    const attrValue = Object.values(attribute)[0]
    return driver[attrKey] === attrValue
  })
}

function exactMatchToList(drivers, attribute){
  const filtered_objects = drivers.filter(function(driver){
    const attrKey = Object.keys(attribute)[0]
    const attrValue = Object.values(attribute)[0]
    return driver[attrKey] === attrValue
  })

  return filtered_objects.map(function(object){
    return object.name
  })
}
