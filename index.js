// Code your solution here:
function driversWithRevenueOver(driver,revenue){
  return newDriver= driver.filter(function(person){return person.revenue > revenue})
}
function driverNamesWithRevenueOver(driver,revenue){ //returns an array of the drivers who match it
   names=driver.filter(function(person){return person.revenue > revenue})
   return names.map(function(person){return person.name})
}
or
// function driverNamesWithRevenueOver(driver,revenue){
//   return driversWithRevenueOrder(driver,revenue).map(function(person){return person[name]})
// }
function exactMatch(driver,object){ //retuned 2 matches
  return driver.filter(function(person){
    if (driver.name == object.name || driver.reveue== object.revenue){
      return driver
    }
  })
}
or
function exactMatch(driver,object){ //returned no matched
  return driver.filter(function(person){return driver.name== object || driver.revenue == object})
}
