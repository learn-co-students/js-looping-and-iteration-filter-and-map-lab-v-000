// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  let driversWithRevenue = []
    drivers.filter(function(driver) {
     if (driver.revenue > revenue){
       driversWithRevenue.push(driver.name)
      }
    });
  return driversWithRevenue
}

function exactMatch(drivers, attribute){
  let driversWithAttribute = []
    drivers.filter(function(driver) {
      for (const key in attribute){
        if  (driver[key]===attribute[key]){
          driversWithAttribute.push(driver)
        }
      }
    });
   return driversWithAttribute
}


function exactMatchToList(drivers, attribute){
  let driverToList = exactMatch(drivers, attribute).filter(function(driver){
    return driver.name
  })
  return driverToList
}


function exactMatchToList(drivers, attribute){
 let driversWithattribute = []
    drivers.filter(function(driver) {
      for (const key in attribute){
        if  (driver[key]===attribute[key]){
          driversWithattribute.push(driver.name)
        }
      }
    });
   return driversWithattribute
}
