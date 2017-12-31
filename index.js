// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
return drivers.filter(function(rev){
  return rev.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
    })
}

function exactMatch(drivers, obj) {
   return drivers.filter(function(element) {
     for (const key in obj) {
       return element[key] === obj[key]
     }
   })
 }

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function(element){
    return element.name;
  })
}
