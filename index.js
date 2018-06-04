// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(element => element.revenue > revenue)
}

function driverNamesWithRevenueOver(arr, revenue) {
  return driversWithRevenueOver(arr, revenue).map(function(value) {
    if (value.revenue > revenue) {
      return value.name;
    }
  });
}

function exactMatch(arr, obj) {
  return arr.filter(function(element) {
    let driver = false;
    for (const key in obj) {
      driver = element[key] === obj[key];
    }
    return driver;
  });
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj).map(function(element) {
    return element.name;
  });
}
