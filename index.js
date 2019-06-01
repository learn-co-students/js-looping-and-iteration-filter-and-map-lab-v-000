// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  let someVar = drivers.filter(function(driver){
    return driver.revenue > revenue ;
  })
    return someVar;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let stringName = drivers.filter(function(driver) {
    if (driver.revenue > revenue) {
    return driver.name
    }
  })
  return stringName.map(function(driver){
    return driver.name
  })
}


function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    for (const key in object) {
      if (object[key] === driver[key]) {
        return object
      }
    }
  })
}


function exactMatchToList(drivers, object) {
  let someVar = drivers.filter(function(driver) {
    for (const key in object) {
      if (object[key] === driver[key]) {
        return driver.name
      }
    }
  })
      return someVar.map(function(driver){
        return driver.name
      });
}
