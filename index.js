// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (d) {
    return d.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.filter(function (d) {
    return d.revenue > revenue
  }).map(function(d) { 
    return d.name
  })
}

function exactMatch(drivers, attribute){
  return drivers.filter(function (d) {
    for ( key in attribute ){
      if (d[key] === attribute[key]){
        return true
      }
    }
  })
}

function exactMatchToList(drivers, attribute){
  return drivers.filter(function (d) {
    for ( key in attribute ){
      if (d[key] === attribute[key]){
        return true
      }
    }
  }).map(function(d){
    return d.name
  })
}