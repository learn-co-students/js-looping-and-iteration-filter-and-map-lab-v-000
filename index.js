// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(hash => hash.revenue > num);
}

function driverNamesWithRevenueOver(array, num) {
  return driversWithRevenueOver(array, num).map(hash => hash.name);
}

function exactMatch(array, condition) {
  return array.filter(hash => hash.name === condition.name || hash.revenue === condition.revenue);
}

function exactMatchToList(array, condition) {
  return exactMatch(array, condition).map(hash => hash.name);
}
