// Code your solution here:
function driversWithRevenueOver(objects, str) {
  return objects.filter(obj => obj.revenue > str)
}

function driverNamesWithRevenueOver(objects, str) {
  return driversWithRevenueOver(objects, str).map(filteredObj => filteredObj.name);
}

function exactMatch(objects, keyValue) {
  return objects.filter(obj => obj[Object.keys(keyValue)] === keyValue[Object.keys(keyValue)]);
}

function exactMatchToList(objects, keyValue) {
  return exactMatch(objects, keyValue).map(filteredObj => filteredObj.name);
}
