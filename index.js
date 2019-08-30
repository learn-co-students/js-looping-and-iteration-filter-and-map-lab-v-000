// Code your solution here:
function driversWithRevenueOver (array, integer) {
  return array.filter(function (element) { return element['revenue'] > integer;});
}

function driverNamesWithRevenueOver (array, integer) {
  let newarray = driversWithRevenueOver(array, integer).map(function (element) { return element['name'];});
  return newarray
}

function exactMatch (array, object) {
  let key = Object.keys(object)[0];
  return array.filter(function (element) {return element[key] === object[key];});
}

function exactMatchToList (array, object) {
  return exactMatch(array, object).map(function (element) { return element['name'];});
}
