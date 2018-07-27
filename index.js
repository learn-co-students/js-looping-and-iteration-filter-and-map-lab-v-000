// Code your solution here:
function driversWithRevenueOver(arr, num) {
  return arr.filter(function (user) { return user.revenue > num })
}

function driverNamesWithRevenueOver(arr, num) {
  return driversWithRevenueOver(arr, num).map(user => user.name)
}

function exactMatch(arr, obj) {
  return arr.filter(function (user) {
    return user[Object.keys(obj)] === Object.values(obj)[0] })
}


function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj).map(user => user.name)
}
