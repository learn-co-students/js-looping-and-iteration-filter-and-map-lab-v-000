// Code your solution here:
function driversWithRevenueOver(drivers,rev){
  return drivers.filter(function(element){
    return element.revenue > rev
  })
}

function driverNamesWithRevenueOver(drivers,rev){
return drivers.filter(function(element){
      return element.revenue > rev
    }
  ).map(function(element){
    return element.name
  })
}

function exactMatch(drivers,obj){
  return drivers.filter(function(element){
    return element.name===obj.name || element.revenue===obj.revenue
  })
}
function exactMatchToList(drivers,obj){
  return drivers.filter(function(element){
    return element.name===obj.name || element.revenue===obj.revenue
  }).map(function(element){
    return element.name
  })
}
