// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter((driver) => {
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue){
   return driversWithRevenueOver(drivers,revenue).map( driver => {
        return driver.name
    })
}

function exactMatch(drivers, attr){
  return drivers.filter((driver) => {
      for (key in attr)
       return attr[key] === driver[key]
  })
}

function exactMatchToList(drivers, attr){
    return exactMatch(drivers,attr).map( driver => driver.name)
}