// Code your solution here:
function driversWithRevenueOver(list, revenue) {
  return list.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(list, revenue) {
  return driversWithRevenueOver(list, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(list, object) {
  let objectKey = Object.keys(object)[0]
  let objectValue = Object.values(object)[0]

  return list.filter(function(driver) {
    return driver[objectKey] === objectValue
  });
}

function exactMatchToList(list, object) {
  return exactMatch(list, object).map(function(driver) {
    return driver.name;
  });
}
