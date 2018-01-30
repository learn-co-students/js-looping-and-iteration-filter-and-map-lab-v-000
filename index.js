function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (el) {
    return el.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(arr, revenue) {
  return driversWithRevenueOver(arr, revenue)
  .map(function (el) {
    return el.name
  })
}

function exactMatch(arr, obj) {
  return arr.filter(function (el) {
    for (const attr in obj) {
      return el[attr] === obj[attr]
    }
  })
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj)
  .map(function (el) {
    return el.name
  })
}