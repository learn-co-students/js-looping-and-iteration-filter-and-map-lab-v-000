// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(element) {
    return element.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(element) {
    // let result;
    for (const key in obj) {
      return element[key] === obj[key]
    }
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (driver) {
    return driver.name
  })
}
