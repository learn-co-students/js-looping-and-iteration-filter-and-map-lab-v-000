// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
return drivers.filter(x => x.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let array = drivers.filter(x => x.revenue > revenue)
  return array.map(y => y.name)
}

function exactMatch(drivers, obj) {
  let arrOne = drivers.filter(x =>  x.revenue === obj.revenue)
  let arrTwo = drivers.filter(y => y.name === obj.name)
  let combined = arrOne.concat(arrTwo)
  return combined
}

function exactMatchToList(drivers, obj) {
  let arrOne = drivers.filter(x =>  x.revenue === obj.revenue)
let arrTwo = drivers.filter(y => y.name === obj.name)
let combined = arrOne.concat(arrTwo)
let mapped = combined.map(x => x.name)
return mapped
}
