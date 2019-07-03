// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(hash => hash.revenue > num);
}

function driverNamesWithRevenueOver(array, num) {
  return driversWithRevenueOver(array, num).map(hash => hash.name);
}

function exactMatch(array, condition) {
  let key = Object.keys(condition)[0];
  return array.filter(hash => hash[key] === condition[key]);
}

function exactMatchToList(array, condition) {
  return exactMatch(array, condition).map(hash => hash.name);
}
