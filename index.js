// Code your solution here:
function driversWithRevenueOver(list, revenue) {
  return list.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(list, revenue) {
  const newList = driversWithRevenueOver(list, revenue)
  return newList.map(function (driver) {
    return driver.name;
  })
}

function exactMatch(list, object) {
  return list.filter(function (driver) {
    for (const key in driver) {
      if (driver[key] === object[key])
       return true;
    }
    return false;
  })
}

function exactMatchToList(list, object) {
  const newList = exactMatch(list, object)
  return newList.map(function (driver){
    return driver.name;
  })
}
