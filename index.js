// Code your solution here:
function driversWithRevenueOver(drivers, number){
  return drivers.filter(function(driver){return driver.revenue > number})
}

function driverNamesWithRevenueOver(drivers, number){
  const people = drivers.filter(function(driver){
    return driver.revenue > number;
  })
  return people.map(function(person) {return person.name})
}

function exactMatch(drivers, object){
  return drivers.filter(function(driver){return driver[Object.keys(object)[0]] === Object.values(object)[0]})
}
function exactMatchToList(drivers, object){
  const match = drivers.filter(function(driver){return driver[Object.keys(object)[0]] === Object.values(object)[0]})
  return match.map(function(driver) {return driver.name})
}
