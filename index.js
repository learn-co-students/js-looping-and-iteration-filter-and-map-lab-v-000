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
return drivers.filter(function(element){
  let matches = []
  for (const key in obj) {
    console.log(element[key])
    matches = element[key] === obj[key]
  }
  return matches
})
}

function exactMatchToList(drivers, obj){
 return exactMatch(drivers, obj).map(function(driver){
   return driver.name
 })
}
