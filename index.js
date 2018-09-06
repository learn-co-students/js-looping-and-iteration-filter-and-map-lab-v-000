// Code your solution here:
function driversWithRevenueOver(drivers,string) {

  return drivers.filter(function(x){return x.revenue > string})
}

function driverNamesWithRevenueOver(drivers,string,cb) {

  return driversWithRevenueOver(drivers,string).map(function (y) {return y.name})

  }

function exactMatch(drivers,object) {
  return drivers.filter(function(x) {return x[Object.keys(object)[0]] === object[Object.keys(object)[0]]})
}

function exactMatchToList(drivers,object) {
  return exactMatch(drivers,object).map(function (x) {return x.name})
}
