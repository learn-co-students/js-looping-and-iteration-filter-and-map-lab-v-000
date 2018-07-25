// Code your solution here:

function driversWithRevenueOver(arr, revenue){
    return arr.filter(function(driver){ return driver.revenue > revenue})
}


function driverNamesWithRevenueOver(arr, revenue){
  let newArr = arr.filter(function(driver){ return driver.revenue > revenue})
    return newArr.map(function(driver){return driver.name})
}

function exactMatch(arr, object){
  return arr.filter(function(driver){
      for(const key in object){
        return driver[key] == object[key]
}
   })
}

function exactMatchToList(arr, object){
  let newArr =  arr.filter(function(driver){
      for(const key in object){
        return driver[key] == object[key]
}
   })
  return newArr.map(function(driver) {return driver.name})
}
