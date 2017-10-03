function driversWithRevenueOver(collection, revenue){
  let newDrivers = []
  for (const element of collection){
    if (element.revenue > revenue){
      newDrivers.push(element)
    }
  }
  return newDrivers
}

function driverNamesWithRevenueOver(collection, revenue){
  let newDrivers = []
  for (const element of collection){
    if (element.revenue > revenue){
      newDrivers.push(element.name)
    }
  }
  return newDrivers
}

function exactMatch(collection, obj){
  let newDrivers = []
  for (const element of collection){
    if (element.name === obj.name){
      newDrivers.push(element)
    } else 
    if (element.revenue === obj.revenue){
      newDrivers.push(element)
    }
  }
  return newDrivers
}

function exactMatchToList(collection, obj){
  let newDrivers = []
  for (const element of collection){
    if (element.name === obj.name){
      newDrivers.push(element.name)
    } else 
    if (element.revenue === obj.revenue){
      newDrivers.push(element.name)
    }
  }
  return newDrivers
}