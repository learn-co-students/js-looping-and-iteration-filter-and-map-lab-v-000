// Code your solution here:
// Code your solution here:

function driversWithRevenueOver(array, revenue){
  return array.filter(function(element){ return element.revenue > revenue})
}

function driverNamesWithRevenueOver(array, revenue){
  return array.filter(function(element){ return element.revenue > revenue}).map(function(driver){
   return (driver.name)
  })
}

function exactMatch(drivers, obj){
return drivers.filter(function(element){ console.log(element)
  return element[Object.keys(obj)] === Object.values(obj)})
}
