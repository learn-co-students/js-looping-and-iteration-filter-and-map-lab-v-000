// Code your solution here:
function driversWithRevenueOver(drivers, amount){
  return drivers.filter(function (input) {return input.revenue > amount})
}

function driverNamesWithRevenueOver(drivers, amount){
  newarray = []
  filteredDrivers = driversWithRevenueOver(drivers, amount)
  filteredDrivers.map(function(driver){
    newarray.push(driver.name)
  })
  return newarray
}

function exactMatch(drivers, object){
  let key = Object.keys(object)
  key = key[0]
  let value = object[key]
  return drivers.filter(function (input) {return input[key] === value})
}

function exactMatchToList(drivers, object){
let newarray = []
let driverObjects = exactMatch(drivers, object)
driverObjects.map(function(driver){
  newarray.push(driver.name)
})
return newarray
}
