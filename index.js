// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(function(object){ return object.revenue > revenue});
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map(function(object){ return object.name });
}

function exactMatch(array, object) {
  return array.filter(function(driver){ return object[Object.keys(object)[0]] === driver[Object.keys(object)[0]] });
}

function exactMatchToList(array, object) {
  return exactMatch(array, object).map(function(object){ return object.name });
}
