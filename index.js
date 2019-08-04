// Code your solution here:


function driversWithRevenueOver(arr, value) {
  return arr.filter(function(e) {
     return e.revenue > value
  } )
}

//return string of driver name with revenue > value
function driverNamesWithRevenueOver(arr, value) {
  let newStr = driversWithRevenueOver(arr, value);
    return newStr.map((e) => e.name);
}

function exactMatch(arr, obj) {
  return arr.filter(function (e) {
    for (const key in obj) {
      return e[key] === obj[key];
    }
  })
}

function exactMatchToList(arr, obj) {
  let newStr = exactMatch(arr, obj);
    return newStr.map(e => e.name)
}
