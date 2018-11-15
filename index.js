// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  const newArray = drivers.filter(function(item) {return item.revenue > revenue})
  return newArray
}

function driverNamesWithRevenueOver(drivers, revenue){
  const newArray = drivers.filter(function(item) {return item.revenue > revenue})
  const finalArray = newArray.map(function(item) {return item.name})
  return finalArray
}

function exactMatch(drivers, attribute){
  const newArray = drivers.filter(function(item) {return item[Object.keys(attribute)[0]] === attribute[Object.keys(attribute)[0]] })
  return newArray
}

function exactMatchToList(drivers, attribute){
  const newArray = drivers.filter(function(item) {return item[Object.keys(attribute)[0]] === attribute[Object.keys(attribute)[0]] })
  const finalArray = newArray.map(function(item) {return item.name})
  return finalArray
}
