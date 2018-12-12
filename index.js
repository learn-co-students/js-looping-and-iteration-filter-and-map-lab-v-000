// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(function (e) {
    return e.revenue > num
  })
}

function driverNamesWithRevenueOver(array, num) {
  let newarray = driversWithRevenueOver(array, num)
  return newarray.map(function (e) {
    return `${e.name}`
  })
}

function exactMatch(array, obj) {
  return array.filter(function (e) {
    let key = Object.keys(obj)[0]
    return e[key] === obj[key]
  })
}

function exactMatchToList(array, obj) {
  let newarray = exactMatch(array, obj)
  return newarray.map(function (e) {
    return `${e.name}`
  })
}
