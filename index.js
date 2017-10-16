// Code your solution here:
function driversWithRevenueOver (drivers, amount) {
  return drivers.filter(function(x) {
    return x.revenue > amount
  })
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount)
  .map(function(x){
    return x.name
  })
}

function exactMatch(drivers, matcher) {
  return drivers.filter(function(x){
    let matches = false;
    for (const key in matcher) {
      matches = x[key] === matcher[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher)
  .map(function(x){
    return x.name
  })
}
