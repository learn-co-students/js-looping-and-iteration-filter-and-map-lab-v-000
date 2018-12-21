// Code your solution here:

function driversWithRevenueOver(drivers,revenue) {
    return drivers.filter(function(driver) {
          return (driver.revenue >= revenue)
    })
}

function driverNamesWithRevenueOver(drivers,revenue) {
   return driversWithRevenueOver(drivers, revenue).map(function(driver){
       return driver.name
   })
}

function exactMatch(drivers, query){
    const queryKey = Object.keys(query)[0]
    const queryValue = Object.values(query)[0]
   
    return drivers.filter(function(driver) {
        return driver[queryKey] === queryValue
 
    })
}

    function exactMatchToList(drivers, query) {
    return exactMatch(drivers, query).map(function(driver){
      return driver.name
    })
   }

