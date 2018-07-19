// Code your solution here:

function driversWithRevenueOver(array, revenue) {
  return array.filter(function (element)
  { return element['revenue'] > revenue})
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map(function (element) { return element['name']})
}

function exactMatch(array, hash) {
return array.filter(function (element) {
  for (const key in hash) {
  return element[key] === hash[key]}
  })
}

function exactMatchToList(array, hash) {
  return exactMatch(array, hash).map(function (element) { return element['name']})
}
