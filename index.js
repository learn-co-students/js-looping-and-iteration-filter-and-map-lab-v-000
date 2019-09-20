// Code your solution here:
function driversWithRevenueOver(driver,amount){
  return newDriver= driver.filter(function(person){return person.revenue > amount})
}
function driverNamesWithRevenueOver(driver,amount){ //returns an array of the drivers who match it
   names=driver.filter(function(person){return person.revenue > amount})
   return names.map(function(person){return person.name})
}

// function exactMatch(driver,object){ //retuned 2 matches
//   return driver.filter(function(person){
//     if (person.name == object.name || person.reveue== object.revenue){
//       return person
//     }
//   })
// }

function exactMatch(driver,object){ //returned no matched
  return driver.filter(function(person){return person.name== object.name || person.revenue == object.revenue})
}
function exactMatchToList(driver,object){
  filteredDriver= driver.filter(function(person){return person.name== object.name || person.revenue == object.revenue})
  return filteredDriver.map(function(person){return person.name})
}
